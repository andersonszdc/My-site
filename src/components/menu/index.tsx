import React from "react";
import Link from "next/link";
import { Wrapper } from "./styles";

export interface MenuProps {
  isClicked: boolean;
  handleClick?: () => void;
}

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
