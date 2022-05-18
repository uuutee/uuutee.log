import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const MainImage = () => {
  return <div css={containerStyle}>
    <div css={innerStyle}>
      <h1 css={titleStyle}>uuutee.log()</h1>
      <h2 css={subtitleStyle}>web開発でハマったことや試したことをメモしていきます</h2>
      <div css={linksStyle}>
        <a href="https://github.com/uuutee" target={'_blank'} css={linkStyle}><FontAwesomeIcon icon={brands('github')} /></a>
        <a href="https://twitter.com/uuutee" target={'_blank'} css={linkStyle}><FontAwesomeIcon icon={brands('twitter')} /></a>
        <a href="/" target={'_blank'} css={linkStyle}><FontAwesomeIcon icon={solid('rss')} /></a>
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
  display: flex;
  text-align: center;
  z-index: 10;
`

const linkStyle = css`
  margin: 0 4px;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  &:hover {
    color: #ccc;
  }
`
