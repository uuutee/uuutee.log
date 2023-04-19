import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'
import { Tag } from '../types'

type Props = {
  tags: Array<Tag>
}

const TagList: FC<Props> = ({ tags = [] }: Props) => {
  return (
    <ul className="flex max-w-lg flex-wrap" css={listStyle}>
      {tags.map(tag => (
        <li className="mt-2 mb-2 mr-5" key={tag.id}>
          <span>
            <Link href={`/tags/${tag.id}`}>
              <a>{tag.text}</a>
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

export default TagList
