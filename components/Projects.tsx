import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

interface StyledProps {
    rightIsActive?: boolean,
    leftIsActive?: boolean
}

const Wrapper = styled.div`
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
        <Wrapper>
            <h2 className="projects_title">Projetos</h2>
            <div className="projects__cards">
                {projects.map((project: any, index: number) => (
                    <Card data={project} key={index} />
                ))}
            </div>
        </Wrapper>
    );
}

export default Projects;