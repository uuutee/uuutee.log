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
      <Layout>
        <Head>
          <title>タグ一覧</title>
        </Head>
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            タグ一覧
          </h1>
          <TagList tags={allTags} />
        </div>
      </Layout>
    </YearContext.Provider>
  )
}

export default TagPosts
