import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { LightText } from '../../components/util'

const BackToHome = styled.div`
  margin: 3rem 0 0;
`

const ArticleHeader = styled.h1`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
`

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <ArticleHeader>{postData.title}</ArticleHeader>
        <LightText>
          <Date dateString={postData.date} />
        </LightText>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <BackToHome>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </BackToHome>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
