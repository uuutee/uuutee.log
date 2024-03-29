import { FC } from 'react'
import { parseISO, format } from 'date-fns'

type Props = { dateString: string }

const Date: FC<Props> = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date
