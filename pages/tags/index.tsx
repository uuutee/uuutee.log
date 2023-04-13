import Layout from '../../components/layouts/Layout'
import { getAllTags, getAllYears } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { TagContext, YearContext } from '../../lib/contexts'
import { Tag, Year } from '../../types'
import TagList from '../../components/TagList'

type Props = {
  allYears: Array<Year>
  allTags: Array<Tag>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      allYears: getAllYears(),
      allTags: getAllTags(),
    },
  }
}

const TagPosts: NextPage<Props> = ({ allYears, allTags }: Props) => {
  return (
    <YearContext.Provider value={allYears}>
      <TagContext.Provider value={allTags}>
        <Layout>
          <Head>
            <title>タグ一覧</title>
          </Head>
          <h1>タグ一覧</h1>
          <TagList tags={allTags} />
        </Layout>
      </TagContext.Provider>
    </YearContext.Provider>
  )
}

export default TagPosts
