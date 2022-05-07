import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import {LightText} from '../components/util'

type Post = {
    date: string
    title: string
    id: string
}

const BlogSection = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`

const HeadingLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`

const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const BlogListItem = styled.li`
  margin: 0 0 1.25rem;
`

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
      <BlogSection>
        <HeadingLg>Blog</HeadingLg>
        <BlogList>
          {allPostsData.map(({ id, date, title }) => (
            <BlogListItem key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <LightText style={{fontSize: 'smaller'}}>
                <Date dateString={date} />
              </LightText>
            </BlogListItem>
          ))}
        </BlogList>
      </BlogSection>
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
