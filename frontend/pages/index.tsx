import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import {getAllYears, getSortedPostsData} from '../lib/posts'
import { GetStaticProps } from 'next'
import { css } from '@emotion/react'
import {BlogList} from '../components/blogList'
import React from 'react'

type Post = {
    date: string
    title: string
    id: string
}

type Year = {
  id: string
  text: string
  count: number
}

export const YearContext = React.createContext([])

export default function Home({
  allPostsData,
  allYears
}: {
  allPostsData: Post[],
  allYears: Year[]
}) {
  return (
    <YearContext.Provider value={allYears}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section css={blogSectionStyle}>
          <h2 css={blogHeaderStyle}>Blog</h2>
          <BlogList posts={allPostsData} />
        </section>
      </Layout>
    </YearContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const allYears = getAllYears()
  return {
    props: {
      allPostsData: allPostsData,
      allYears: allYears
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
