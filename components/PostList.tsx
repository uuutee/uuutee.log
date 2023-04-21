import Link from 'next/link'
import { FC } from 'react'
import { Post } from '../types'
import Date from './Date'
import LightText from './LightText'

type Props = { posts: Array<Post> }

const PostList: FC<Props> = ({ posts }: Props) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.length > 0 &&
        posts.map(post => (
          <li key={post.id} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div>
                  <LightText>
                    <Date dateString={post.date} />
                  </LightText>
                </div>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/posts/${post.id}`}>
                          <a className="text-gray-900 dark:text-gray-100">
                            {post.title}
                          </a>
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
    </ul>
  )
}

export default PostList
