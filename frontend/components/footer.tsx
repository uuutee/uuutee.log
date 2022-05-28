import { css } from '@emotion/react'

export const Footer = () => {
  return <footer css={containerStyle}>
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
