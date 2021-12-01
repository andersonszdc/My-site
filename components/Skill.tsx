import React from 'react'
import styled, { keyframes } from 'styled-components'
import TechIcons, { TechListType } from './TechIcons'

const slide = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-1344px);
    }
`

const Container = styled.div`
    white-space: nowrap;
    overflow: hidden;
    .slide-wrapper {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        animation: ${slide} 80s linear infinite;
    }

    @media (max-width: 900px) {
        .slide-wrapper {
            animation: ${slide} 60s linear infinite;
        }
    }

    @media (max-width: 600px) {
        .slide-wrapper {
            animation: ${slide} 40s linear infinite;
        }
    }
    
    @media (max-width: 400px) {
        .slide-wrapper {
            animation: ${slide} 20s linear infinite;
        }
    }
`

const Skill: React.FC = () => {
    const techs: Array<TechListType> = [
        'react',
        'firebase',
        'nextjs',
        'redux',
        'typescript',
        'javascript',
        'styledComponents',
        'tailwindcss',
        'nodejs',
        'mongodb',
        'aws',
        'graphql',
        'figma',
        'express'
    ]
    return (
        <Container>
            <div className="slide-wrapper">
                <TechIcons techs={techs} size="6.4rem" padding="0 1.6rem" />
                <TechIcons techs={techs} size="6.4rem" padding="0 1.6rem" />
            </div>
        </Container>
    );
}

export default Skill;