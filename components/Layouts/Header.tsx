import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'
import { SITE_TITLE } from '../../lib/constants'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <h1 css={titleStyle}>
        <Link href={'/'}>
          <a css={linkStyle}>{SITE_TITLE}</a>
        </Link>
      </h1>
      <div className="flex items-center text-base leading-5">
        <ul className="flex">
          <li>
            <a
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              href="/years"
            >
              Archives
            </a>
          </li>
          <li>
            <a
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              href="/tags"
            >
              Tags
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

const titleStyle = css`
  font-size: 1.8rem;
  letter-spacing: -2px;
  word-break: break-word;
`

const linkStyle = css`
  font-weight: 700;
  background-image: linear-gradient(to right, #075985 0, #0c4a6e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #243949 0, #517fa4 100%);
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    animation: shine 1s ease-in-out infinite;
  }

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`

export default Header
