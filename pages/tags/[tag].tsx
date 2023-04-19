import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Heading from '../../components/Heading'
import Layout from '../../components/Layouts'
import PostList from '../../components/PostList'
import { getAllTags, getSortedPostsData } from '../../lib/posts'
import { Post } from '../../types'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTags().map(tag => {
    return {
      params: {
        tag: tag.id,
      },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

type Props = {
  posts: Array<Post>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = getSortedPostsData().filter(post =>
    post.tags.includes(params.tag as string)
  )

  return {
    props: {
      posts: posts,
    },
  }
}

const TagPosts: NextPage<Props> = ({ posts }: Props) => {
  const router = useRouter()
  const title = `${router.query.tag as string} の記事一覧`

  return (
    <Layout title={title}>
      <Heading title={title} />
      <PostList posts={posts} />
    </Layout>
  )
}

export default TagPosts
