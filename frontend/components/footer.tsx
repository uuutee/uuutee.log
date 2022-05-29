import { css } from '@emotion/react'
import { YearlyList } from './yearlyList'
import React from 'react'
import { YearContext } from '../lib/contexts'

export const Footer = () => {
  const years = React.useContext(YearContext)

  return <footer css={footerStyle}>
    <div css={footerInnerStyle}>
      <h2 css={sectionTitleStyle}>年度別記事</h2>
      <YearlyList years={years} />
      <div css={copyrightStyle}>© 2022 uuutee All Rights Reserved.</div>
    </div>
  </footer>
}

const footerStyle = css`
  background-color: #243949;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const footerInnerStyle = css`
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
`

const sectionTitleStyle = css`
  font-weight: bold;
  color: #fff;
  font-size: 1rem;
  margin: 0 0 5px;
  padding: 0;
`

const copyrightStyle = css`
  font-size: .75rem;
  text-align: center;
  color: #999;
  line-height: 1.2rem;
`
