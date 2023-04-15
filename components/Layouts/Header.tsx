import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <h1 css={titleStyle}>
        <Link href={'/'}>
          <a css={linkStyle}>uuutee.log</a>
        </Link>
      </h1>
    </header>
  )
}

const titleStyle = css`
  width: 200px;
  font-size: 1.8rem;
  margin: 0;
  text-align: center;
  letter-spacing: -2px;
  word-break: break-word;
`

const linkStyle = css`
  font-weight: 700;
  color: #243949;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #517fa4;
  }
`

export default Header
