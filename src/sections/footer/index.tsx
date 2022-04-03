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
          <li className="abas__item h6">Contatos</li>
        </Link>
        <Link passHref href="/projects">
          <li className="abas__item h6">Projetos</li>
        </Link>
        <Link passHref href="/blog">
          <li className="abas__item h6">Blog</li>
        </Link>
        <Link passHref href="/sobreMim">
          <li className="abas__item h6">Sobre mim</li>
        </Link>
      </ul>
      <div>
        <h3 className="redes__title h6">Minhas redes!</h3>
        <ul className="footer__icons">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/andersonszdc/"
            >
              <FaInstagram className="icon h4" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/Andersonszdc"
            >
              <FaTwitter className="icon h4" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto: contato@andersonszdc.com"
            >
              <HiOutlineMail className="icon h4" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/andersonszdc/"
            >
              <FaLinkedin className="icon h4" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/andersonszdc"
            >
              <FaGithub className="icon h4" />
            </a>
          </li>
        </ul>
      </div>
      <div className="credit">
        <div className="logo">
          <Logo color="#FAF8F8" />
        </div>
        <p className="p4">
          © 2021 Andersonszdc.
          <br />
          Made for me in RJ, Brazil.
        </p>
      </div>
    </Wrapper>
  );
};

export default Index;
