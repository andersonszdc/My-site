import React from "react";
import styled from "styled-components";
import InView from "../lib/inView";
import { FaAngleDown } from "react-icons/fa";
import HeroImg from "../assets/hero-anderson.png";
import Image from "next/image";
import { bleen } from "../styles/global";
import Link from "next/link";

type WrapperProps = {
  inView: boolean;
};

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

  ${(props) =>
    props.inView &&
    `
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
    color: ${(props) => props.theme.colors.blue};
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: normal;
    flex-direction: column;
    gap: 3.2rem;
    padding-top: 15vh;
    padding-bottom: 0;
  }
`;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: none;
  padding: 8px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  transition: 0.1s ease-out;

  :hover {
    transform: scale(1.03);
  }
`;

const HGLButton = styled(Button)`
  border: none;
  padding: 2px;
  background: linear-gradient(
    90deg,
    hsl(173deg 100% 50%) 0%,
    hsl(179deg 91% 49%) 50%,
    hsl(185deg 82% 49%) 100%
  );

  .module {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 8px;
  }
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: 0.5s cubic-bezier(0.3, 0, 0.5, 1);

  .name {
    width: max-content;
    ${bleen};
    color: ${(props) => props.theme.colors.blue};
    font-size: 1.8rem;
    font-weight: 600;
  }

  .function {
    font-size: 3.6rem;
  }

  .description {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .highlight {
    ${bleen};
  }

  .hero_action {
    display: flex;
    gap: 16px;
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
`;

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
`;

const Index = () => {
  return (
    <InView>
      {(inView) => (
        <Wrapper id="hero" inView={inView}>
          <HeroInfo>
            <h2 className="name" data-fade="1">
              Anderson Souza
            </h2>
            <h1 className="function" data-fade="2">
              Desenvolvedor{" "}
              <span className="highlight">
                Full Stack
                <br />& UI
              </span>{" "}
              Designer
            </h1>
            <p className="description" data-fade="3">
              Um estudante que relata sua trajetória e<br />
              descobertas por este mundo.
            </p>
            <div className="hero_action" data-fade="4">
              <Link passHref href="/contatos">
                <HGLButton>
                  <div className="module">
                    <p className="highlight">Falar comigo</p>
                  </div>
                </HGLButton>
              </Link>
              <Link passHref href="/sobreMim">
                <Button>Sobre mim</Button>
              </Link>
            </div>
          </HeroInfo>
          <HeroImage>
            <div data-fade="3">
              <Image
                width="366"
                height="409"
                layout="responsive"
                alt=""
                priority
                src={HeroImg}
              />
            </div>
          </HeroImage>
          <div className="icon__down">
            <a href="#projects_title">
              <FaAngleDown className="bounce-animation" />
            </a>
          </div>
        </Wrapper>
      )}
    </InView>
  );
};

export default Index;
