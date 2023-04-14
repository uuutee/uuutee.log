import Layout from '../../components/Layouts'
import { getAllTags, getAllYears } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { YearContext } from '../../lib/contexts'
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
      <Layout title={'タグ一覧'}>
        <TagList tags={allTags} />
      </Layout>
    </YearContext.Provider>
  )
}

export default TagPosts
