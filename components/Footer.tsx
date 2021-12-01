import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styled from 'styled-components'
import Logo from './Logo';
import Link from 'next/link';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 4% 1.6rem 4%;
  align-items: center;
  border-top: 1px solid white;
  padding-top: 3.6rem;

  span {
    display: block;
    border-top: 0.1rem solid white;
    width: 100%;
    margin-bottom: 9rem;
  }

  .footer__abas {
    display: flex;
    gap: 6.4rem;
  }

  .abas__item {
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: .2s ease-out;

    :hover {
      color: ${props => props.theme.colors.blue};
    }
  }

  .redes__title {
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
  }

  .footer__icons {
    display: flex;
    gap: 2.4rem;
  }

  .icon {
    font-size: 3rem;
    cursor: pointer;
    transition: .2s ease-out;

    :hover {
      color: ${props => props.theme.colors.blue};
    }
  }

  .credit {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    p {
      font-size: 1.4rem;
      color: ${props => props.theme.colors.blue};
    }
  }

  .logo {
    width: 2.5rem;
  }

  @media (max-width: 560px) {
    .footer__abas {
      flex-direction: column;
      align-items: center;
      gap: 3.2rem;
      margin-bottom: 3.2rem;
    }

    .redes__title {
      display: none;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <ul className="footer__abas">
        <li className="abas__item">Contatos</li>
        <li className="abas__item">Projetos</li>
        <li className="abas__item">Blog</li>
        <li className="abas__item">Sobre mim</li>
      </ul>
      <div>
        <h3 className="redes__title">Minhas redes!</h3>
        <ul className="footer__icons">
          <li><Link passHref href="https://www.instagram.com/andersonszdc/"><FaInstagram className="icon" /></Link></li>
          <li><Link passHref href="https://twitter.com/Andersonszdc"><FaTwitter className="icon" /></Link></li>
          <li><Link passHref href="mailto: contato@andersonszdc.com"><HiOutlineMail className="icon" /></Link></li>
          <li><Link passHref href="https://www.linkedin.com/in/andersonszdc/"><FaLinkedin className="icon" /></Link></li>
          <li><Link passHref href="https://github.com/andersonszdc"><FaGithub className="icon" /></Link></li>
        </ul>
      </div>
      <div className='credit'>
        <div className='logo'>
          <Logo color="#FAF8F8" />
        </div>
        <p>
        © 2021 Andersonszdc.<br/>Made for me in RJ, Brasil.
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;