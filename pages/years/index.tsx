import { GetStaticProps, NextPage } from 'next'
import Heading from '../../components/Heading'
import Layout from '../../components/Layouts'
import YearlyList from '../../components/YearlyList'
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
      <Heading title={'年別記事一覧'} />
      <YearlyList years={years} />
    </Layout>
  )
}

export default YearlyIndex
