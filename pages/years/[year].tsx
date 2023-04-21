import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Heading from '../../components/Heading'
import Layout from '../../components/Layouts'
import PostList from '../../components/PostList'
import { getAllYears, getSortedPostsData } from '../../lib/posts'
import { Post, Year } from '../../types'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllYears().map(year => {
    return {
      params: {
        year: year.id,
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
  const posts = getSortedPostsData().filter(post => {
    const year = post.date.split('-')[0]
    return year == params.year
  })
  return {
    props: {
      posts: posts,
      years: getAllYears(),
    },
  }
}

const YearlyPosts: NextPage<Props> = ({ posts }: Props) => {
  const router = useRouter()
  const title = `${router.query.year as string} 年の記事一覧`

  return (
    <Layout title={title}>
      <Heading title={title} />
      <PostList posts={posts} />
    </Layout>
  )
}

export default YearlyPosts
