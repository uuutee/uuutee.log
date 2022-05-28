import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { css } from '@emotion/react'
import {BlogList} from '../components/blogList'

type Post = {
    date: string
    title: string
    id: string
}

export default function Home({
  allPostsData
}: {
  allPostsData: Post[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section css={blogSectionStyle}>
        <h2 css={blogHeaderStyle}>Blog</h2>
        <BlogList posts={allPostsData} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const blogSectionStyle = css`
  font-size: 1.2rem;
  line-height: 1.5;
`

const blogHeaderStyle = css`
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
`
