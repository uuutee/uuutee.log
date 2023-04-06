import { css } from '@emotion/react'
import YearlyList from './YearlyList'
import React, { FC, useContext } from 'react'
import { YearContext } from '../lib/contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer: FC = () => {
  const years = useContext(YearContext)

  return (
    <footer css={footerStyle}>
      <div css={footerInnerStyle}>
        <section>
          <h2 css={sectionTitleStyle}>年度別記事</h2>
          <YearlyList years={years} />
        </section>
        <section>
          <div css={linksStyle}>
            <a
              href="https://github.com/uuutee"
              target={'_blank'}
              css={linkStyle}
            >
              <FontAwesomeIcon icon={brands('github')} />
            </a>
            <a
              href="https://twitter.com/uuutee"
              target={'_blank'}
              css={linkStyle}
            >
              <FontAwesomeIcon icon={brands('twitter')} />
            </a>
            <a href="/" target={'_blank'} css={linkStyle}>
              <FontAwesomeIcon icon={solid('rss')} />
            </a>
          </div>
        </section>
        <div css={copyrightStyle}>© 2022 uuutee All Rights Reserved.</div>
      </div>
    </footer>
  )
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

const linksStyle = css`
  display: flex;
  text-align: center;
  justify-content: center;
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

const copyrightStyle = css`
  font-size: 0.75rem;
  text-align: center;
  color: #999;
  line-height: 1.2rem;
`

export default Footer
