import { css } from '@emotion/react'

const name = '[Your Name]'

export default function Header() {
    return <header css={profileHeaderStyle}>
        <img
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt={name}
            css={profileImgStyle}
        />
        <h1 css={profileHeadingStyle}>{name}</h1>
    </header>
}

const profileHeaderStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const profileImgStyle = css`border-radius: 9999px;`

const profileHeadingStyle = css`
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
`
