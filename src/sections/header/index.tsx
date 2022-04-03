import React, { useEffect, useState } from "react";
import Logo from "../../components/logo";
import Menu from "../../components/menu";
import Link from "next/link";
import { Me, MenuBtn, Wrapper } from "./styles";

export interface StyledProps {
  isClicked: boolean;
}

interface HeaderProps {
  toggleColors: () => void;
}

const Index = ({ toggleColors }: HeaderProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("#FAF8F8");

  function handleClick() {
    setIsClicked(isClicked ? false : true);
    setColor(color === "#FAF8F8" ? "#2B2323" : "#FAF8F8");
    toggleColors();
  }

  function handleLogoClick() {
    if (isClicked === true) {
      setIsClicked(false);
      setColor(color === "#FAF8F8" ? "#2B2323" : "#FAF8F8");
      toggleColors();
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
            <div className="me__logo">
              <Logo color={color} />
            </div>
            <div>
              <h1 className="me__title h5">Anderson Souza</h1>
              <h2 className="p3">
                <span className="subtitle__full">Full Stack</span>
                <span className="subtitle__and"> & </span>
                <span className="subtitle__designer">UI/UX Designer</span>
              </h2>
            </div>
          </Me>
        </Link>
        <MenuBtn isClicked={isClicked} onClick={handleClick}>
          <p className="label">menu</p>
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
