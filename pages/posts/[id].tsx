import { css } from '@emotion/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Date from '../../components/Date'
import Heading from '../../components/Heading'
import Layout from '../../components/Layouts'
import { YearContext } from '../../lib/contexts'
import { getAllPostIds, getAllYears, getPostData } from '../../lib/posts'
import { Post, Year } from '../../types'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

type Props = {
  post: Post
  years: Array<Year>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = await getPostData(params.id as string)
  return {
    props: {
      post: post,
      years: getAllYears(),
    },
  }
}

const PostDetail: NextPage<Props> = ({ post, years }: Props) => {
  return (
    <YearContext.Provider value={years}>
      <Layout title={post.title}>
        <Heading
          title={post.title}
          beforeTitle={
            <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <Date dateString={post.date} />
            </div>
          }
        />
        <article className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div
              className="prose max-w-none pt-10 pb-8 dark:prose-dark"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </article>
        <div
          css={css`
            margin: 3rem 0 0;
          `}
        >
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </Layout>
    </YearContext.Provider>
  )
}

export default PostDetail
