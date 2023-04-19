import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'
import { Year } from '../types'

type Props = {
  years: Array<Year>
}

const YearlyList: FC<Props> = ({ years = [] }: Props) => {
  return (
    <ul css={listStyle}>
      {years.length > 0 &&
        years.map(year => (
          <li key={year.id}>
            <span>
              <Link href={`/years/${year.id}`}>
                <a css={linkStyle}>{year.text}</a>
              </Link>
            </span>
          </li>
        ))}
    </ul>
  )
}

const listStyle = css`
  list-style: none;
  margin: 0;
  padding: 0 0 0 10px;
`

const linkStyle = css`
  cursor: pointer;
  &:hover {
    color: #444;
  }
`

export default YearlyList
