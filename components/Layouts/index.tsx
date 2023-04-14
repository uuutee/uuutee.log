import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { FC, ReactNode } from 'react'

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
      <main className="mb-auto">
        <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          {title && (
            <div className="space-x-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
                {title}
              </h1>
            </div>
          )}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
