import Layout from '../../components/Layout'
import {
  getAllPostIds,
  getAllTags,
  getAllYears,
  getPostData,
} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/Date'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Link from 'next/link'
import LightText from '../../components/LightText'
import { css } from '@emotion/react'
import { TagContext, YearContext } from '../../lib/contexts'
import { Post, Tag, Year } from '../../types'

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
  allTags: Array<Tag>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData: postData,
      allYears: getAllYears(),
      allTags: getAllTags(),
    },
  }
}

const PostDetail: NextPage<Props> = ({
  postData,
  allTags,
  allYears,
}: Props) => {
  return (
    <YearContext.Provider value={allYears}>
      <TagContext.Provider value={allTags}>
        <Layout>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 css={articleHeaderStyle}>{postData.title}</h1>
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
      </TagContext.Provider>
    </YearContext.Provider>
  )
}

const articleHeaderStyle = css`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

export default PostDetail
