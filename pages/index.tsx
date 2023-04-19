import { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layouts'
import PostList from '../components/PostList'
import { YearContext } from '../lib/contexts'
import { getAllYears, getSortedPostsData } from '../lib/posts'
import { Post, Year } from '../types'

type Props = {
  posts: Array<Post>
  years: Array<Year>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getSortedPostsData(),
      years: getAllYears(),
    },
  }
}

const Home: NextPage<Props> = ({ posts, years }: Props) => {
  return (
    <YearContext.Provider value={years}>
      <Layout home>
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
    </YearContext.Provider>
  )
}

export default Home
