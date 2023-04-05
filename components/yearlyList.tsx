import Link from 'next/link'
import { css } from '@emotion/react'

export const YearlyList = ({ years = [] }) => {
  return (
    <ul css={listStyle}>
      {years.length > 0 &&
        years.map(year => (
          <li key={year.id}>
            <span>
              <Link href={`/${year.id}`}>
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
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`
