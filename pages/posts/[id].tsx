import { css } from '@emotion/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Date from '../../components/Date'
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
  postData: Post
  allYears: Array<Year>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData: postData,
      allYears: getAllYears(),
    },
  }
}

const PostDetail: NextPage<Props> = ({ postData, allYears }: Props) => {
  return (
    <YearContext.Provider value={allYears}>
      <Layout title={postData.title}>
        <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
          <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <Date dateString={postData.date} />
          </div>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {postData.title}
          </h1>
        </div>
        <article className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div
              className="prose max-w-none pt-10 pb-8 dark:prose-dark"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
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
