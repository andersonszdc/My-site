import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Skill from "../../sections/skills";
import Head from "next/head";
import { bleen } from "../../styles/global";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.2rem 4% 9rem 4%;
  align-items: center;
  gap: 48px;

  h2 {
    ${bleen}
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
  }

  .about_card {
    position: relative;
    display: flex;
    border-radius: 16px;
    aspect-ratio: 4/5;
  }

  .about_img {
    display: block;
    border-radius: 16px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    @media (max-width: 1000px) {
      .about_card {
        aspect-ratio: 21/9;
      }
    }
  }
`;

const sobreMim = () => {
  return (
    <>
      <Head>
        <title>Sobre Mim - Andersonszdc</title>
      </Head>
      <Wrapper>
        <h2 className="h3">Sobre mim</h2>
        <Intro>
          <div>
            <div className="about_card">
              <Image
                layout="fill"
                className="about_img"
                alt="Anderson"
                src="/assets/aboutme-example.png"
              />
            </div>
          </div>
          <div className="about_text p2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel dui
              vitae, urna duis ut gravida placerat. Nunc rhoncus id ornare neque
              sed sagittis. Eget leo leo fermentum, velit. Varius habitant sit
              convallis viverra non dolor massa augue.
            </p>
          </div>
        </Intro>
        <h2 className="h3">Minha stack</h2>
        <div className="about_skills">
          <Skill />
        </div>
      </Wrapper>
    </>
  );
};

export default sobreMim;
