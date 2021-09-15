import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 4% 16px 4%;
  .content {
    span {
      display: block;
      border-top: 1px solid white;
      width: 100%;
      margin: 45px 0;
    }
    .title {
      margin-bottom: 16px;
      font-size: 24px;
    }
    .email,
    .number {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      gap: 6px;
      font-weight: 500;
      font-size: 20px;
      :before {
        content: '';
        display: flex;
        position: relative;
        margin: 0;
        width: 20px;
        height: 3px;
        background-color: ${props => props.theme.colors.blue};
      }
    }
  }
  .credit {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    p {
      color: #878a8f;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className='content'>
        <span></span>
        <h3 className='title'>Contatos</h3>
        <p className='email'>andersonszdc@gmail.com</p>
        <p className='number'>+55 (21) 97351-2104</p>
      </div>
      <div className='credit'>
        <Logo width="25px" color="#FAF8F8" />
        <p>
        © 2021 Andersonszdc.<br/>Made for me in RJ, Brasil.
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;