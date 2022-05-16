import { css } from '@emotion/react'

export const LightText = ({children}: {
  children: React.ReactNode
}) => {
  return <span css={css`color: #666;`}>{children}</span>
}
