import Layout from '../../components/layout'
import { getSortedPostsData, getAllTags } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { BlogList } from '../../components/blogList'
import { TagContext } from '../../lib/contexts'
import { Post, Tag } from '../types'
import { FC } from 'react'

type Props = {
  allPosts: Array<Post>
  allTags: Array<Tag>
}

const TagPosts: FC<Props> = ({ allPosts, allTags }: Props) => {
  const router = useRouter()

  return (
    <TagContext.Provider value={allTags}>
      <Layout>
        <Head>
          <title>{router.query.tag}</title>
        </Head>
        <h1>{router.query.tag}</h1>
        <BlogList posts={allPosts} />
      </Layout>
    </TagContext.Provider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags()
  return {
    paths: tags.map(tag => {
      return {
        params: {
          tag: tag.id,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      allPosts: getSortedPostsData(),
      allTags: getAllTags(),
    },
  }
}

export default TagPosts
