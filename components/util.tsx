import { css } from '@emotion/react'
import { FC, ReactNode } from 'react'

type Props = { children: ReactNode }

export const LightText: FC<Props> = ({ children }: Props) => {
  return (
    <span
      css={css`
        color: #666;
      `}
    >
      {children}
    </span>
  )
}
