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
                <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  {tag.text}
                </a>
              </Link>
              <span className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                ({tag.count})
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagList
