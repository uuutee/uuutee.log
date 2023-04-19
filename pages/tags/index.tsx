import { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layouts'
import TagList from '../../components/TagList'
import { getAllTags } from '../../lib/posts'
import { Tag } from '../../types'

type Props = {
  tags: Array<Tag>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      tags: getAllTags(),
    },
  }
}

const TagPosts: NextPage<Props> = ({ tags }: Props) => {
  return (
    <Layout title={'タグ一覧'}>
      <TagList tags={tags} />
    </Layout>
  )
}

export default TagPosts
