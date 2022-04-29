import Head from 'next/head'
import Header from './header'
import styled from 'styled-components'

export const siteTitle = 'Next.js Sample Website'

const Container = styled.div`
  `

const Content = styled.main`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
    background-color: #fff;
  `

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <Container>
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
      </Head>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}
