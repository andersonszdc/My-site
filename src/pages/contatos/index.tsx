import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import styled from "styled-components";
import Forms from "../../sections/forms";
import Head from "next/head";
import { bleen } from "../../styles/global";
import { motion } from "framer-motion";

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos - Andersonszdc</title>
      </Head>
      <Wrapper
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
      >
        <h2 className="title h3">Fale comigo!</h2>
        <p className="p2">
          Sinta-se livre para me enviar uma mensagem sobre qualquer coisa.
        </p>
        <Infos>
          <li className="infos__item">
            <HiOutlineMail className="icon h1" />
            <h3 className="p2">contato@andersonszdc.com</h3>
          </li>
          <li className="infos__item">
            <BsTelephone className="icon h1" />
            <h3 className="p2">+55 (21) 97351-2104</h3>
          </li>
          <li className="infos__item">
            <HiOutlineLocationMarker className="icon h1" />
            <h3 className="p2">Rio de Janeiro - RJ</h3>
          </li>
        </Infos>
        <Forms />
      </Wrapper>
    </>
  );
};

export default Contatos;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4%;
  margin: 4.8rem 0 9rem 0;

  .title {
    ${bleen}
    margin-bottom: 1.6rem;
  }
`;

const Infos = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 4rem;

  .infos__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.8rem;
    border-radius: 0.8rem;
    padding: 2.4rem;
    cursor: pointer;
    transition: 0.3s ease-in;

    :hover {
      background-color: ${({ theme }) => theme.colors.gray4};
    }
  }

  .icon {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
