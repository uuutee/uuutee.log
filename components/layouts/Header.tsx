import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header css={containerStyle}>
      <div css={innerStyle}>
        <h1 css={titleStyle}>
          <Link href={'/'}>
            <a css={linkStyle}>uuutee.log()</a>
          </Link>
        </h1>
        <h2 css={subtitleStyle}>すぐ忘れるのでメモ</h2>
      </div>
    </header>
  )
}

const containerStyle = css`
  background-image: linear-gradient(to right, #243949 0, #517fa4 100%);
`

const innerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

const titleStyle = css`
  width: 200px;
  font-size: 1.8rem;
  margin: 0;
  text-align: center;
  font-weight: 200;
  letter-spacing: -2px;
  word-break: break-word;
  color: #fff;
`

const linkStyle = css`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`

const subtitleStyle = css`
  margin: 0;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  color: #fff;
  font-weight: 400;
`

export default Header
