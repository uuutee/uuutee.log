import { css } from '@emotion/react'
import Link from 'next/link'
import Date from './date'
import { LightText } from './util'

export const BlogList = ({ posts }) => {
  return (
    <ul css={blogListStyle}>
      {posts.length > 0 &&
        posts.map((post) => (
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
