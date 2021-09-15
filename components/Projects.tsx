import React from 'react'
import styled from 'styled-components'
import Card from './Card';

const Wrapper = styled.div`
    padding: 0 4%;
    .projects__title {
        margin-bottom: 45px;
    }
    .projects__cards {
        display: flex;
        gap: 24px;
        width: 100%;
    }
`

const Projects: React.FC = () => {
  return (
      <Wrapper>
          <h2 className="projects__title">Projetos</h2>
          <div className="projects__cards">
              <Card />
              <Card />
              <Card />
          </div>
      </Wrapper>
  );
}

export default Projects;