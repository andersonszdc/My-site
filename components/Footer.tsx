import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4% 16px 4%;
  span {
    display: block;
    border-top: 1px solid white;
    width: 100%;
    margin-bottom: 45px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .box {
      .title {
        margin-bottom: 16px;
        font-size: 24px;
      }
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        gap: 6px;
        font-weight: 500;
        font-size: 16px;
        :before {
          content: '';
          display: flex;
          position: relative;
          margin: 0;
          width: 20px;
          height: 3px;
          background-color: ${props => props.theme.colors.blue};
          border-radius: 12px;
        }
      }
    }
  }
  .credit {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    .logo {
      width: 25px;
    }
    p {
      color: #878a8f;
    }
  }
  @media (max-width: 900px) {
    .content {
      flex-direction: column;
      gap: 45px;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <span></span>
      <div>
        <div className='content'>
          <ul className='box'>
            <h3 className='title'>Contatos</h3>
            <li className='item'>andersonszdc@gmail.com</li>
            <li className='item'>+55 (21) 97351-2104</li>
          </ul>
          <ul className='box'>
            <h3 className='title'>Posts recentes</h3>
            <li className='item'>Next.js - Meu resumo...</li>
            <li className='item'>TypeScript - Meu resumo...</li>
          </ul>
          <ul className='box'>
            <h3 className='title'>Minhas redes</h3>
            <li className='item'>Instagram</li>
            <li className='item'>GitHub</li>
          </ul>
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