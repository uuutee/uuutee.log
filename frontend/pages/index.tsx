import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import {LightText} from '../components/util'
import { css } from '@emotion/react'

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
        <ul css={blogListStyle}>
          {allPostsData.map(({ id, date, title }) => (
            <li
              key={id}
              css={css`margin: 0 0 1.25rem;`}
            >
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <LightText css={css`font-size: smaller;`}>
                <Date dateString={date} />
              </LightText>
            </li>
          ))}
        </ul>
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

const blogListStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
`
