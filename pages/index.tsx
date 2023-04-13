import Head from 'next/head'
import Layout, { siteTitle } from '../components/layouts/Layout'
import { getAllTags, getAllYears, getSortedPostsData } from '../lib/posts'
import { GetStaticProps, NextPage } from 'next'
import { css } from '@emotion/react'
import BlogList from '../components/PostList'
import React from 'react'
import { TagContext, YearContext } from '../lib/contexts'
import { Post, Tag, Year } from '../types'

type Props = {
  allPosts: Array<Post>
  allYears: Array<Year>
  allTags: Array<Tag>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      allPosts: getSortedPostsData(),
      allYears: getAllYears(),
      allTags: getAllTags(),
    },
  }
}

const Home: NextPage<Props> = ({ allPosts, allYears, allTags }: Props) => {
  return (
    <YearContext.Provider value={allYears}>
      <TagContext.Provider value={allTags}>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section css={blogSectionStyle}>
            <h2 css={blogHeaderStyle}>Blog</h2>
            <BlogList posts={allPosts} />
          </section>
        </Layout>
      </TagContext.Provider>
    </YearContext.Provider>
  )
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

export default Home
