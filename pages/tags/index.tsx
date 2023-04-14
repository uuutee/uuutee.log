import { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layouts'
import TagList from '../../components/TagList'
import { YearContext } from '../../lib/contexts'
import { getAllTags, getAllYears } from '../../lib/posts'
import { Tag, Year } from '../../types'

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
