import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroImage, HeroInfo, Wrapper } from "./styles";
import { Btn, HGLBtn } from "../../components/button/styles";
import { motion } from "framer-motion";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, x: -100 },
};

const Index = () => {
  return (
    <Wrapper>
      <HeroInfo>
        <motion.h2
          custom={1}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="name h5"
        >
          Anderson Souza
        </motion.h2>
        <h1 className="function h3">
          Desenvolvedor{" "}
          <span className="highlight">
            Full Stack
            <br />& UI/UX
          </span>{" "}
          Designer
        </h1>
        <p className="description p2">
          Fascinado por desenvolvimento Web, design e animações.
        </p>
        <div className="hero_action">
          <Link passHref href="/contatos">
            <HGLBtn>Falar comigo</HGLBtn>
          </Link>
          <Link passHref href="/sobreMim">
            <Btn>Sobre mim</Btn>
          </Link>
        </div>
      </HeroInfo>
      <HeroImage
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <div>
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
    </Wrapper>
  );
};

export default Index;
