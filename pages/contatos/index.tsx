import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import styled from 'styled-components'
import Forms from '../../components/Forms'
import Head from 'next/head'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4%;
  margin: 4.8rem 0 9rem 0;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 4.8rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 3.2rem;
  }
`

const Infos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4rem;
  border-radius: 3.2rem;
  border: 2px solid ${props => props.theme.colors.blue};

  .infos_item {
    display: grid;
    grid-template-columns: 2.4rem auto;
    list-style: none;
    gap: .8rem;
  }

  .icon {
    font-size: 2.4rem;
    color: ${props => props.theme.colors.blue};
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  
  h3 {
    grid-column: 2/3;
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media (max-width: 400px) {
    padding: 1.6rem;
    border-radius: 1.2rem;

    .icon {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`

const Contatos = () => {

  return (
    <>
      <Head>
        <title>Contatos - Andersonszdc</title>
      </Head>
      <Wrapper>
        <Infos>
          <li className="infos_item">
            <HiOutlineMail className="icon" />
            <h2>E-mail</h2>
            <h3>contato@andersonszdc.com</h3>
          </li>
          <li className="infos_item">
            <BsTelephone className="icon" />
            <h2>Celular</h2>
            <h3>+55 (21) 97351-2104</h3>
          </li>
          <li className="infos_item">
            <HiOutlineLocationMarker className="icon" />
            <h2>Cidade</h2>
            <h3>Rio de Janeiro - RJ</h3>
          </li>
        </Infos>
        <Forms />
      </Wrapper>
    </>
  )
}

export default Contatos;