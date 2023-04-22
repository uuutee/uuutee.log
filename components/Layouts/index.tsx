import Head from 'next/head'
import { FC, ReactNode, useMemo } from 'react'
import { SITE_TITLE } from '../../lib/constants'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

type Props = {
  title?: string
  children: ReactNode
}

const Layout: FC<Props> = ({ title, children }: Props) => {
  const viewTitle = useMemo<string>(() => {
    return title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  }, [title])

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            viewTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={viewTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{viewTitle}</title>
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
