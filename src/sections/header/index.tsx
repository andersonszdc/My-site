import React, { useEffect, useState } from "react";
import Logo from "../../components/logo";
import Menu from "../../components/menu";
import Link from "next/link";
import { Me, MenuBtn, Wrapper } from "./styles";

export interface StyledProps {
  isClicked: boolean;
}

interface HeaderProps {
  toggleTheme: () => void;
}

const Index = ({ toggleTheme }: HeaderProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("#FAF8F8");

  function handleClick() {
    setIsClicked(isClicked ? false : true);
    setColor(color === "#FAF8F8" ? "#2B2323" : "#FAF8F8");
    toggleTheme();
  }

  function handleLogoClick() {
    if (isClicked === true) {
      setIsClicked(false);
      setColor(color === "#FAF8F8" ? "#2B2323" : "#FAF8F8");
      toggleTheme();
    }
  }

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isClicked]);

  return (
    <>
      <Wrapper isClicked={isClicked}>
        <Link passHref href="/">
          <Me isClicked={isClicked} onClick={handleLogoClick}>
            <div className="logo">
              <Logo color={color} />
            </div>
            <div>
              <h1 className="title">Anderson Souza</h1>
              <h2 className="subtitle">Full Stack & UI Designer</h2>
            </div>
          </Me>
        </Link>
        <MenuBtn isClicked={isClicked} onClick={handleClick}>
          <p>menu</p>
          <div className="burger">
            <span className="one" />
            <span className="two" />
            <span className="three" />
          </div>
        </MenuBtn>
        <Menu handleClick={handleClick} isClicked={isClicked} />
      </Wrapper>
    </>
  );
};

export default Index;
