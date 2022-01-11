import React from "react";
import aboutImg from "../../assets/aboutme.png";
import Image from "next/image";
import styled from "styled-components";
import Skill from "../../components/Skill";
import Head from "next/head";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.2rem 4% 9rem 4%;
  align-items: center;
  gap: 48px;

  h2 {
    font-size: 2.4rem;
    color: ${(props) => props.theme.colors.blue};
  }

  .about_skills {
    width: 100%;
  }

  @media (max-width: 800px) {
    .about_skills {
      grid-template-columns: 1fr;
    }
  }
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;

  .about_text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 1.6rem;
    line-height: 133%;
  }

  .about_card {
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.blue};
    border-radius: 16px;
  }

  .about_img {
    border-radius: 16px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const sobreMim = () => {
  return (
    <>
      <Head>
        <title>Sobre Mim - Andersonszdc</title>
      </Head>
      <Wrapper>
        <h2>Sobre mim</h2>
        <Intro>
          <div>
            <div className="about_card">
              <Image className="about_img" alt="Anderson" src={aboutImg} />
            </div>
          </div>
          <div className="about_text">
            <p>
              Iniciei no desenvolvimento web em 2020, criando sites com o famoso
              Wordpress kkk e Shopify. Porém, eu me sentia muito limitado no
              quesito design, então aprendi HTML e CSS. E, simplesmente, fiquei
              fascinado pelo mundo da programação - eu sei que HTML e CSS não
              são linguagens de programação kkkk, mas foram eles que me abriram
              a porta para este mundo.
            </p>
            <p>
              Logo em seguida, decidi que seria um desenvolvedor front-end.
              Depois de muitas pesquisas sobre roadmaps, aprendi em sequência:
              Javascript, React, Node.js, TypeScript, Next.js, GraphQL e sigo
              estudando e aprendendo tecnologias novas.
            </p>
            <p>
              Sei trabalhar como full-stack, porém meu foco, hoje em dia, é
              maior em front-end.
            </p>
            <p>
              Bom, essa foi minha apresentação. Já deu uma olhada nos meus
              projetos?
            </p>
          </div>
        </Intro>
        <h2>Minha stack</h2>
        <div className="about_skills">
          <Skill />
        </div>
      </Wrapper>
    </>
  );
};

export default sobreMim;
