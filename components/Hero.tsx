import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import anderson from '../assets/hero-anderson.png'
import Image from 'next/image'
import InView from '../lib/inView'
import { FaAngleDown } from 'react-icons/fa'

type WrapperProps = {
  inView: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  position: relative;
  grid-template-columns: auto 1fr;
  padding: 0 4% 80px 4%;
  align-items: center;
  min-height: calc(100vh - 80px);

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

  .icon__down {
    display: flex;
    justify-content: center;
    font-size: 4rem;
    position: absolute;
    bottom: 6.4rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: ${props => props.theme.colors.blue};
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: normal;
    flex-direction: column;
    gap: 3.2rem;
    padding-top: 15vh;
    padding-bottom: 0;
  }
`

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: .5s cubic-bezier(.3,0,.5,1);

  .name {
    color: ${props => props.theme.colors.blue};
    font-size: 1.8rem;
    font-weight: 500;
  }

  .function {
    font-size: 3.6rem;
  }

  .description {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .hero_icons {
    margin-top: .8rem;
    font-size: 3.2rem;
    display: flex;
    gap: 3.2rem;

    a {
      display: inline-flex;
      color: ${props => props.theme.colors.blue};
      text-decoration: none;
    }
  }

  @media (max-width: 700px) {
    .name {
      font-size: 1.2rem;
    }
    .function {
      font-size: 2.4rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 400px) {
    .name {
      font-size: 1rem;
    }
    .function {
      font-size: 2rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }
`

const HeroImage = styled.div`
  display: inline-flex;
  justify-content: center;

  div {
    width: 350px;
  }

  @media (max-width: 1000px) {
    div {
      width: 275px;
    }
  }

  @media (max-width: 500px) {
    div {
      width: 200px;
    }
  }
`

const Hero: React.FC = () => {
    return (
      <InView>
        {(inView) => (
          <Wrapper id="hero" inView={inView}>
            <HeroInfo>
              <h2 className='name' data-fade="1">Anderson Souza</h2>
              <h1 className='function' data-fade="2">Desenvolvedor Front-end e<br/>User Interface Designer</h1>
              <p className='description' data-fade="3">Um estudante que relata sua trajetória e<br/>descobertas por este mundo.</p>
              <div className='hero_icons' data-fade="4">
                <a title='Ir para o Instagram (link externo)' target='_blank' rel='noreferrer' href="https://www.instagram.com/andersonszdc/">
                  <GrInstagram title='ícone Instagram' />
                </a>
                <a title='Ir para o Github (link externo)' target='_blank' rel='noreferrer' href="https://github.com/andersonszdc">
                  <VscGithub title='ícone Github' />
                </a>
                <a title='Ir para o Linkedin (link externo)' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/anderson-souza-b28431198/">
                  <FaLinkedin title='ícone Linkedin' />
                </a>
              </div>
            </HeroInfo>
            <HeroImage>
              <div data-fade="3">
                <Image alt="img" src={anderson}  />
              </div>
            </HeroImage>
            <div className="icon__down">
              <FaAngleDown className="bounce-animation" />
            </div>
          </Wrapper>
        )}
      </InView>
    );
}

export default Hero;