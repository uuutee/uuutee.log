import Layout from '../../components/layouts/Layout'
import { getSortedPostsData, getAllTags, getAllYears } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import BlogList from '../../components/PostList'
import { TagContext, YearContext } from '../../lib/contexts'
import { Post, Tag, Year } from '../../types'

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
  allPosts: Array<Post>
  allYears: Array<Year>
  allTags: Array<Tag>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const tag = (() => {
    if (Array.isArray(params.tag)) {
      return params.tag[0]
    }
    return params.tag
  })()
  const allPosts = getSortedPostsData().filter(post => post.tags.includes(tag))

  return {
    props: {
      allPosts: allPosts,
      allYears: getAllYears(),
      allTags: getAllTags(),
    },
  }
}

const TagPosts: NextPage<Props> = ({ allPosts, allYears, allTags }: Props) => {
  const router = useRouter()

  return (
    <YearContext.Provider value={allYears}>
      <TagContext.Provider value={allTags}>
        <Layout>
          <Head>
            <title>{router.query.tag}</title>
          </Head>
          <h1>{router.query.tag}</h1>
          <BlogList posts={allPosts} />
        </Layout>
      </TagContext.Provider>
    </YearContext.Provider>
  )
}

export default TagPosts
