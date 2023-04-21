import { css } from '@emotion/react'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { AUTHOR_NAME } from '../../lib/constants'

const Footer: FC = () => {
  return (
    <footer className="mt-16 flex flex-col items-center">
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
        © {new Date().getFullYear()} {AUTHOR_NAME} All Rights Reserved.
      </div>
    </footer>
  )
}

const linkStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`

export default Footer
