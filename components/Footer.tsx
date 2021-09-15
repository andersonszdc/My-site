import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4%;
  span {
    display: block;
    border-top: 1px solid white;
    width: 100%;
  }
  .title {
    margin-top: 60px;
    margin-bottom: 16px;
  }
  .email {
    margin-bottom: 6px;
    :before {
      content: '';
      display: flex;
      position: relative;
      margin: 0;
      width: 20px;
      height: 3px;
      background-color: white;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <span></span>
      <h3 className='title'>Contatos</h3>
      <p className='email'>andersonszdc@gmail.com</p>
      <p className='number'>+55 (21) 97351-2104</p>
    </Wrapper>
  );
}

export default Footer;