import { css } from '@emotion/react'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useContext } from 'react'
import { YearContext } from '../../lib/contexts'
import YearlyList from '../YearlyList'

const Footer: FC = () => {
  const years = useContext(YearContext)

  return (
    <footer className="mt-16 flex flex-col items-center ">
      <section>
        <h2 css={sectionTitleStyle}>年度別記事</h2>
        <YearlyList years={years} />
      </section>
      <section>
        <div className="mb-3 flex space-x-4">
          <a
            href="https://github.com/uuutee"
            target={'_blank'}
            css={linkStyle}
            className="text-sm text-gray-500 transition hover:text-gray-600"
          >
            <FontAwesomeIcon icon={brands('github')} />
          </a>
          <a
            href="https://twitter.com/uuutee"
            target={'_blank'}
            css={linkStyle}
            className="text-sm text-gray-500 transition hover:text-gray-600"
          >
            <FontAwesomeIcon icon={brands('twitter')} />
          </a>
          <a
            href="/"
            target={'_blank'}
            css={linkStyle}
            className="text-sm text-gray-500 transition hover:text-gray-600"
          >
            <FontAwesomeIcon icon={solid('rss')} />
          </a>
        </div>
      </section>
      <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        © 2022 uuutee All Rights Reserved.
      </div>
    </footer>
  )
}

const sectionTitleStyle = css`
  font-weight: bold;
  font-size: 1rem;
  margin: 0 0 5px;
  padding: 0;
`

const linkStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`

export default Footer
