import Layout from '../components/layout'
import { getSortedPostsData, getAllYears } from '../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { BlogList } from '../components/blogList'
import { YearContext } from '../lib/contexts'

export default function YearlyPosts({ allPosts, allYears }) {
  const router = useRouter()
  return (
    <YearContext.Provider value={allYears}>
      <Layout>
        <Head>
          <title>{router.query.year}</title>
        </Head>
        <h1>{router.query.year}</h1>
        <BlogList posts={allPosts} />
      </Layout>
    </YearContext.Provider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const years = getAllYears()
  return {
    paths: years.map((year) => {
      return {
        params: {
          year: year.id,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = getSortedPostsData().filter((post) => {
    const year = post.date.split('-')[0]
    return year == params.year
  })
  return {
    props: {
      allPosts: allPosts.map((post) => ({
        ...post,
      })),
      allYears: getAllYears(),
    },
  }
}
