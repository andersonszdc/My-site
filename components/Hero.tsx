import React from 'react'
import styled from 'styled-components'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import Image from 'next/image'
import Anderson from '../assets/hero-anderson.png'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 90px;
  margin-bottom: 30vh;
  min-height: calc(50vh);
  padding: 0 4%;
  align-items: center;
  .informations {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
      a {
        display: inline-flex;
        color: ${props => props.theme.colors.blue};
        text-decoration: none;
      }
    }
  }
  .wrapper__img {
    display: inline-flex;
    justify-content: center;
    .image {
      width: 300px;
    }
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
    margin-top: 45px;
  }
  @media (max-width: 700px) {
    .informations {
      .function {
        font-size: 24px;
      }
      .description {
        font-size: 12px;
      }
    }
  }
`

const Hero: React.FC = () => {
    return (
        <Wrapper>
          <div className='informations'>
            <h2 className='name'>Anderson Souza</h2>
            <h2 className='function'>Desenvolvedor Front-End e<br/>User Interface Designer</h2>
            <p className='description'>Um estudante que relata sua trajetória e<br/>descobertas por este mundo.</p>
            <div className='icons'>
              <a href="https://www.instagram.com/andersonszdc/">
                <GrInstagram />
              </a>
              <a href="https://github.com/andersonszdc">
                <VscGithub />
              </a>
              <a href="https://www.linkedin.com/in/anderson-souza-b28431198/">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className='wrapper__img'>
            <div className='image'>
              <Image src={Anderson} alt='anderson-hero' />
            </div>
          </div>
      </Wrapper>
    );
}

export default Hero;