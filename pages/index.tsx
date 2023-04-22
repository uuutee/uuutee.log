import { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layouts'
import PostList from '../components/PostList'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../types'

type Props = {
  posts: Array<Post>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getSortedPostsData(),
    },
  }
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Layout>
      <section>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Blog
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <PostList posts={posts} />
        </div>
      </section>
    </Layout>
  )
}

export default Home
