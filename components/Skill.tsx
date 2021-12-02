import React from 'react'
import { SiFirebase, SiGraphql, SiJavascript, SiNodedotjs, SiReact } from 'react-icons/si'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 4rem;
    justify-content: center;
`

const Skill: React.FC = () => {
    return (
        <Container>
            <SiJavascript size="6.4rem" color="#F0DB4F" />
            <SiReact size="6.4rem" color="#61DAFB" />
            <SiFirebase size="6.4rem" color="#F58220" />
            <SiGraphql size="6.4rem" color="#E434AA" />
            <SiNodedotjs size="6.4rem" color="#83CD29" />
        </Container>
    );
}

export default Skill;