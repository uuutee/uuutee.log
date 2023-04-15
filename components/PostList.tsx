import Link from 'next/link'
import { FC } from 'react'
import { Post } from '../types'
import Date from './Date'
import LightText from './LightText'

type Props = { posts: Array<Post> }

const PostList: FC<Props> = ({ posts }: Props) => {
  return (
    <ul>
      {posts.length > 0 &&
        posts.map(post => (
          <li key={post.id} className="py-4">
            <div>
              <LightText>
                <Date dateString={post.date} />
              </LightText>
            </div>
            <div className="space-y-3 xl:col-span-3">
              <h3 className="text-2xl font-bold leading-8 tracking-tight">
                <Link href={`/posts/${post.id}`}>
                  <a className="text-gray-900 dark:text-gray-100">
                    {post.title}
                  </a>
                </Link>
              </h3>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default PostList
