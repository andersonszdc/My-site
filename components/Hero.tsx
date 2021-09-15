import React from 'react';
import styled from 'styled-components'
import { VscGithub } from 'react-icons/vsc'
import { GrInstagram } from 'react-icons/gr'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7vw;
  gap: 16px;
  padding: 0 4%;
  min-height: calc(100vh - 180px);
  transition: .5s cubic-bezier(.3,0,.5,1);
  .name {
    color: ${props => props.theme.colors.blue};
    font-size: 16px;
    font-weight: 500;
  }
  .function {
    font-size: 36px;
  }
  .icons {
    margin-top: 12px;
    font-size: 32px;
    display: flex;
    gap: 28px;
    color: ${props => props.theme.colors.blue}
  }
`

const Hero: React.FC = () => {
    return (
        <Wrapper>
            <h2 className='name'>Anderson Souza</h2>
            <h2 className='function'>Desenvolvedor Frontend e<br/>User Interface Designer</h2>
            <p className='description'>Um estudante que relata sua trajetória e<br/>descobertas por este mundo.</p>
            <div className='icons'>
                <GrInstagram />
                <VscGithub />
            </div>
      </Wrapper>
    );
}

export default Hero;