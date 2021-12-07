import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import InView from '../lib/inView'
import Card from './Card'
import Link from 'next/link'
import { getStaticProps } from '../pages'

type WrapperProps = {
    inView: boolean
}

const Wrapper = styled.div<WrapperProps>`
    padding: 40px 4%;

    .projects_title {
        font-size: 2.4rem;
        margin-bottom: 4rem;
        color: ${props => props.theme.colors.blue};
    }

    .projects__cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.4rem;
    }

    [data-fade] {
        transition: 400ms ease-out;
        transform: translateY(6rem);
        opacity: 0;
    }
    ${props => props.inView && `
    [data-fade] {
      transform: translateY(0);
      opacity: 1;
    }

    [data-fade='1'] {
      transition-delay: 100ms;
    }

    [data-fade='2'] {
      transition-delay: 200ms;
    }

    [data-fade='3'] {
      transition-delay: 300ms;
    }

    [data-fade='4'] {
      transition-delay: 400ms;
    }
  `}

    @media (max-width: 800px) {
        .projects__cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (max-width: 600px) {
        .projects__cards {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 400px) {
        .projects_title {
            font-size: 1.8rem;
            margin-bottom: 2.4rem;
        }
    }
`

const SeeMore = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    padding: 8px;
    font-size: 1.6rem;
    margin-top: 3.2rem;
    font-weight: 600;
    font-family: 'Montserrat';
    cursor: pointer;
    transition: all .1s ease-out;
    :hover {
        border-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.blue};
        transform: scale(1.03);
    }
`

const Projects = ({projects}: any) => {

    return (
        <InView>
            {(inView) => (
                <Wrapper id="projects" inView={inView}>
                    <h2 data-fade="1" className="projects_title">Projetos</h2>
                    <div data-fade="2" className="projects__cards">
                        {projects.map((project: any, index: number) => (
                            <Card data={project} key={index} />
                            ))}
                    </div>
                    <Link passHref href='/projects'>
                        <div data-fade="3">
                            <SeeMore>Ver mais projetos</SeeMore>
                        </div>
                    </Link>
                </Wrapper>
            )}
        </InView>
    );
}

export default Projects;