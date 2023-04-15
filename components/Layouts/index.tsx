import Head from 'next/head'
import { FC, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

export const siteTitle = 'Next.js Sample Website'

type Props = {
  title?: string
  home?: boolean
  children: ReactNode
}

const Layout: FC<Props> = ({ title, home, children }: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title ? title : siteTitle}</title>
      </Head>
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
