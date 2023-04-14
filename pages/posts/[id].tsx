import { css } from '@emotion/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Date from '../../components/Date'
import Layout from '../../components/Layouts'
import LightText from '../../components/LightText'
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
        <article>
          <LightText>
            <Date dateString={postData.date} />
          </LightText>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
