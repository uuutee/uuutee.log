import { css } from '@emotion/react'

export const MainImage = () => {
  return <div css={containerStyle}>
    <div css={innerStyle}>
      <h1 css={titleStyle}>uuutee.log()</h1>
      <h2 css={subtitleStyle}>web開発でハマったことや試したことをメモしていきます</h2>
      <div css={linksStyle}>

      </div>
    </div>
  </div>
}

const containerStyle = css`
  position: relative;
  overflow: hidden;
  height: 400px;
  margin-bottom: 80px;
  background-image: linear-gradient(to right,#243949 0,#517fa4 100%);
`

const innerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
`

const titleStyle = css`
  width: 100%;
  z-index: 10;
  font-size: 50px;
  text-align: center;
  font-weight: 700;
  letter-spacing: -2px;
  word-break: break-word;
  color: #fff;
`

const subtitleStyle = css`
  width: 100%;
  z-index: 10;
  font-size: 18px;
  text-align: center;
  line-height: 1.5;
  color: #fff;
  font-weight: 400;
`

const linksStyle = css`
  text-align: center;
  color: #ccc;
  font-size: 2rem;
  z-index: 10;
`
