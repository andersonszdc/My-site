import React from "react";
import InView from "../../lib/inView";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button, HeroImage, HeroInfo, HGLButton, Wrapper } from "./styles";

export type WrapperProps = {
  inView: boolean;
};

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
                src="/assets/hero-anderson.png"
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
