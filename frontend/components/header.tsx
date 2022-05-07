import styled from 'styled-components'

const name = '[Your Name]'

const SiteHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading2xl = styled.h1`
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
`

const ProfileImg = styled.img`
    border-radius: 9999px;
`

export default function Header() {
    return <SiteHeader>
        <ProfileImg
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt={name}
        />
        <Heading2xl>{name}</Heading2xl>
    </SiteHeader>
}
