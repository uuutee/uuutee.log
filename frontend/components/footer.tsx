import { css } from '@emotion/react'
import { YearlyList } from './yearlyList'
import React from 'react'
import { YearContext } from '../lib/contexts'

export const Footer = () => {
  const years = React.useContext(YearContext)

  return <footer css={containerStyle}>
    <YearlyList years={years} />
    <div css={copyrightStyle}>© 2022 uuutee All Rights Reserved.</div>
  </footer>
}

const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const copyrightStyle = css`
  font-size: .75rem;
  text-align: center;
  color: #999;
  line-height: 1.2rem;
`
