import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface MenuProps {
  isClicked: boolean;
  handleClick?: () => void;
}

const Wrapper = styled.div<MenuProps>`
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  height: 0;
  width: 100vw;
  border-radius: 3.2rem;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in-out;

  ${({ isClicked }) =>
    isClicked &&
    `
        height: 100vh;
    `}
  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    transition: color 0.35s ease-out;
    :hover {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

const Menu = ({ isClicked, handleClick }: MenuProps) => {
  return (
    <>
      <Wrapper isClicked={isClicked}>
        <Link href="/sobreMim">
          <a onClick={handleClick}>Sobre mim</a>
        </Link>
        <Link href="/blog">
          <a onClick={handleClick}>Blog</a>
        </Link>
        <Link href="/contatos">
          <a onClick={handleClick}>Contatos</a>
        </Link>
      </Wrapper>
    </>
  );
};

export default Menu;
