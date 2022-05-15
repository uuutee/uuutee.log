import { css } from '@emotion/react'

const name = '[Your Name]'

export default function Header() {
    return <header
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}>
        <img
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt={name}
            css={css`border-radius: 9999px;`}
        />
        <h1
          css={css`
            font-size: 2.5rem;
            line-height: 1.2;
            font-weight: 800;
            letter-spacing: -0.05rem;
            margin: 1rem 0;
        `}>{name}</h1>
    </header>
}
