import Script from 'next/script'
import { FC } from 'react'
import { GOOGLE_ANALYTICS_ID } from '../lib/constants'

const GoogleAnalytics: FC = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics

export const logEvent = (
  action: string,
  category: string,
  label: string,
  value: number
) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
