import Layout from '../components/Layout'
import { getSortedPostsData, getAllYears } from '../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import BlogList from '../components/BlogList'
import { YearContext } from '../lib/contexts'
import { Post, Year } from '../types'
import { FC } from 'react'

type Props = {
  allPosts: Array<Post>
  allYears: Array<Year>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const years = getAllYears()
  return {
    paths: years.map(year => {
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
  const allPosts = getSortedPostsData().filter(post => {
    const year = post.date.split('-')[0]
    return year == params.year
  })
  return {
    props: {
      allPosts: allPosts.map(post => ({
        ...post,
      })),
      allYears: getAllYears(),
    },
  }
}

const YearlyPosts: FC<Props> = ({ allPosts, allYears }: Props) => {
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

export default YearlyPosts
