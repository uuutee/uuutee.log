import Link from 'next/link'
import { FC } from 'react'
import { Tag } from '../types'

type Props = {
  tags: Array<Tag>
}

const TagList: FC<Props> = ({ tags = [] }: Props) => {
  return (
    <div className="flex justify-center">
      <ul className="flex max-w-lg flex-wrap justify-center">
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
    </div>
  )
}

export default TagList
