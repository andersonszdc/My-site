import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 4% 1.6rem 4%;
  span {
    display: block;
    border-top: 0.1rem solid white;
    width: 100%;
    margin-bottom: 9rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .title {
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
  }
  .box {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  .item {
    display: flex;
    align-items: center;
    gap: .6rem;
    font-weight: 500;
    font-size: 1.6rem;

    :before {
      content: '';
      display: flex;
      position: relative;
      margin: 0;
      width: 2rem;
      height: .3rem;
      background-color: ${props => props.theme.colors.blue};
      border-radius: 1.2rem;
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

  @media (max-width: 900px) {
    .content {
      flex-direction: column;
      gap: 4.5rem;
    }
  }

  @media (max-width: 400px) {
    span {
      margin-bottom: 3.2rem;
    }
    .content {
      gap: 3.2rem;
    }
    .title {
      font-size: 1.8rem;
    }
    .item {
      font-size: 1.2rem;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <span></span>
      <div>
        <div className='content'>
          <div>
            <h3 className='title'>Contatos</h3>
            <ul className='box'>
              <li className='item'>andersonszdc@gmail.com</li>
              <li className='item'>+55 (21) 97351-2104</li>
            </ul>
          </div>
          <div>
            <h3 className='title'>Posts recentes</h3>
            <ul className='box'>
              <li className='item'>Next.js - Meu resumo...</li>
              <li className='item'>TypeScript - Meu resumo...</li>
            </ul>
          </div>
          <div>
            <h3 className='title'>Minhas redes</h3>
            <ul className='box'>
              <li className='item'>Instagram</li>
              <li className='item'>GitHub</li>
            </ul>
          </div>
        </div>
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