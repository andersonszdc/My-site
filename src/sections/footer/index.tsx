import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../../components/logo";
import Link from "next/link";
import { Wrapper } from "./styles";

const Index = () => {
  return (
    <Wrapper>
      <ul className="footer__abas">
        <Link passHref href="/contatos">
          <li className="abas__item">Contatos</li>
        </Link>
        <Link passHref href="/projects">
          <li className="abas__item">Projetos</li>
        </Link>
        <Link passHref href="/blog">
          <li className="abas__item">Blog</li>
        </Link>
        <Link passHref href="/sobreMim">
          <li className="abas__item">Sobre mim</li>
        </Link>
      </ul>
      <div>
        <h3 className="redes__title">Minhas redes!</h3>
        <ul className="footer__icons">
          <li>
            <Link passHref href="https://www.instagram.com/andersonszdc/">
              <FaInstagram className="icon" />
            </Link>
          </li>
          <li>
            <Link passHref href="https://twitter.com/Andersonszdc">
              <FaTwitter className="icon" />
            </Link>
          </li>
          <li>
            <Link passHref href="mailto: contato@andersonszdc.com">
              <HiOutlineMail className="icon" />
            </Link>
          </li>
          <li>
            <Link passHref href="https://www.linkedin.com/in/andersonszdc/">
              <FaLinkedin className="icon" />
            </Link>
          </li>
          <li>
            <Link passHref href="https://github.com/andersonszdc">
              <FaGithub className="icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="credit">
        <div className="logo">
          <Logo color="#FAF8F8" />
        </div>
        <p>
          © 2021 Andersonszdc.
          <br />
          Made for me in RJ, Brasil.
        </p>
      </div>
    </Wrapper>
  );
};

export default Index;
