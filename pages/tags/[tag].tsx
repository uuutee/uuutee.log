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
  allPosts: Array<Post>
  allYears: Array<Year>
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
    },
  }
}

const TagPosts: NextPage<Props> = ({ allPosts, allYears }: Props) => {
  const router = useRouter()

  return (
    <YearContext.Provider value={allYears}>
      <Layout
        title={
          Array.isArray(router.query.tag)
            ? router.query.tag[0]
            : router.query.tag
        }
      >
        <PostList posts={allPosts} />
      </Layout>
    </YearContext.Provider>
  )
}

export default TagPosts
