import Layout from '../components/Layouts'
import { getSortedPostsData, getAllYears, getAllTags } from '../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import BlogList from '../components/PostList'
import { YearContext } from '../lib/contexts'
import { Post, Year } from '../types'

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
  allPosts: Array<Post>
  allYears: Array<Year>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const allPosts = getSortedPostsData().filter(post => {
    const year = post.date.split('-')[0]
    return year == params.year
  })
  return {
    props: {
      allPosts: allPosts,
      allYears: getAllYears(),
      allTags: getAllTags(),
    },
  }
}

const YearlyPosts: NextPage<Props> = ({ allPosts, allYears }: Props) => {
  const router = useRouter()
  return (
    <YearContext.Provider value={allYears}>
      <Layout
        title={
          Array.isArray(router.query.year)
            ? router.query.year[0]
            : router.query.year
        }
      >
        <BlogList posts={allPosts} />
      </Layout>
    </YearContext.Provider>
  )
}

export default YearlyPosts
