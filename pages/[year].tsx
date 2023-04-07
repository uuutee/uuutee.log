import Layout from '../components/Layout'
import { getSortedPostsData, getAllYears, getAllTags } from '../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import BlogList from '../components/BlogList'
import { TagContext, YearContext } from '../lib/contexts'
import { Post, Tag, Year } from '../types'

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

type Props = {
  allPosts: Array<Post>
  allYears: Array<Year>
  allTags: Array<Tag>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
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
      allTags: getAllTags(),
    },
  }
}

const YearlyPosts: NextPage<Props> = ({
  allPosts,
  allYears,
  allTags,
}: Props) => {
  const router = useRouter()
  return (
    <YearContext.Provider value={allYears}>
      <TagContext.Provider value={allTags}>
        <Layout>
          <Head>
            <title>{router.query.year}</title>
          </Head>
          <h1>{router.query.year}</h1>
          <BlogList posts={allPosts} />
        </Layout>
      </TagContext.Provider>
    </YearContext.Provider>
  )
}

export default YearlyPosts
