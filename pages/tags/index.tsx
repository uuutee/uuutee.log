import { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layouts'
import TagList from '../../components/TagList'
import { YearContext } from '../../lib/contexts'
import { getAllTags, getAllYears } from '../../lib/posts'
import { Tag, Year } from '../../types'

type Props = {
  years: Array<Year>
  tags: Array<Tag>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      years: getAllYears(),
      tags: getAllTags(),
    },
  }
}

const TagPosts: NextPage<Props> = ({ years, tags }: Props) => {
  return (
    <YearContext.Provider value={years}>
      <Layout title={'タグ一覧'}>
        <TagList tags={tags} />
      </Layout>
    </YearContext.Provider>
  )
}

export default TagPosts
