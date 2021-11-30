import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import InView from '../lib/inView'
import Card from './Card'

type WrapperProps = {
    inView: boolean
}

const Wrapper = styled.div<WrapperProps>`
    padding: 40px 4%;

    .projects_title {
        font-size: 2.4rem;
        margin-bottom: 4rem;
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
                </Wrapper>
            )}
        </InView>
    );
}

export default Projects;