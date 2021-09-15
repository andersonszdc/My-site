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
    margin: 45px 0;
  }
  .title {
    margin-bottom: 16px;
    font-size: 28px;
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