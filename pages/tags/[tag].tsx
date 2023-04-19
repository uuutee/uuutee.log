import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Layouts'
import PostList from '../../components/PostList'
import { YearContext } from '../../lib/contexts'
import { getAllTags, getAllYears, getSortedPostsData } from '../../lib/posts'
import { Post, Year } from '../../types'

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
  years: Array<Year>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const tag = (() => {
    if (Array.isArray(params.tag)) {
      return params.tag[0]
    }
    return params.tag
  })()
  const posts = getSortedPostsData().filter(post => post.tags.includes(tag))

  return {
    props: {
      posts: posts,
      years: getAllYears(),
    },
  }
}

const TagPosts: NextPage<Props> = ({ posts, years }: Props) => {
  const router = useRouter()

  return (
    <YearContext.Provider value={years}>
      <Layout
        title={
          Array.isArray(router.query.tag)
            ? router.query.tag[0]
            : router.query.tag
        }
      >
        <PostList posts={posts} />
      </Layout>
    </YearContext.Provider>
  )
}

export default TagPosts
