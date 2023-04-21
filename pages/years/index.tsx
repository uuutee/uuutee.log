import { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layouts'
import NumberedList from '../../components/NumberedList'
import { getAllYears } from '../../lib/posts'
import { Year } from '../../types'

type Props = {
  years: Array<Year>
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      years: getAllYears(),
    },
  }
}

const YearlyIndex: NextPage<Props> = ({ years }: Props) => {
  return (
    <Layout title={'年別記事一覧'}>
      <NumberedList items={years} />
    </Layout>
  )
}

export default YearlyIndex
