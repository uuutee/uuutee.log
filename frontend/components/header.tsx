import styled from 'styled-components'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const name = '[Your Name]'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Header() {
    return <StyledHeader>
        <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </StyledHeader>
}
