import Link from 'next/link'
import { css } from '@emotion/react'
import { FC } from 'react'
import { Tag } from '../types'

type Props = {
  tags: Array<Tag>
}

const TagList: FC<Props> = ({ tags = [] }: Props) => {
  return (
    <ul css={listStyle}>
      {tags.map(year => (
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

export default TagList
