import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'
import Date from './date'
import { LightText } from './util'

type Post = {
  id: number
  title: string
  date: string
  contentHtml: string
}

type Props = { posts: Array<Post> }

export const BlogList: FC<Props> = ({ posts }: Props) => {
  return (
    <ul css={blogListStyle}>
      {posts.length > 0 &&
        posts.map(post => (
          <li
            key={post.id}
            css={css`
              margin: 0 0 1.25rem;
            `}
          >
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
            <br />
            <LightText
              css={css`
                font-size: smaller;
              `}
            >
              <Date dateString={post.date} />
            </LightText>
          </li>
        ))}
    </ul>
  )
}

const blogListStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
`
