import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../../logo";
import Menu from "../../menu";
import Link from "next/link";
import { bleen } from "../../../styles/global";

interface StyledProps {
  isClicked: boolean;
}

const Wrapper = styled.div<StyledProps>`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 4%;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.black};
`;

const Me = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  z-index: 10;
  cursor: pointer;
  .logo {
    width: 4rem;
  }
  .title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    transition: 0.5s cubic-bezier(0.3, 0, 0.5, 1);
    color: ${(props) => props.theme.colors.text};
  }
  .subtitle {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.2rem;
    font-weight: 600;
  }
  @media (max-width: 400px) {
    .logo {
      width: 2.4rem;
    }
    .title {
      font-size: 1.2rem;
    }
    .subtitle {
      font-size: 0.9rem;
    }
  }
`;

const MenuBtn = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  z-index: 10;
  p {
    color: ${(props) => props.theme.colors.text};
    transition: 0.5s cubic-bezier(0.3, 0, 0.5, 1);
    font-size: 2rem;
  }
  .burger {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    transition: all 0.2s linear;
  }
  .one,
  .two,
  .three {
    width: 2.2rem;
    height: 0.3rem;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 0.1rem;
    transition: all 0.3s linear;
  }
  @media (pointer: fine) {
    :hover {
      opacity: 0.8;
    }
  }
  ${({ isClicked }) =>
    !isClicked &&
    `
        @media ( pointer: fine ) {
            :hover .burger {
                gap: .6rem;
            }
        }
    `}
  ${({ isClicked }) =>
    isClicked &&
    `
        .one {
            transform: translateY(.6rem) rotate(45deg);
        }
        .two {
            opacity: 0;
        }
        .three {
            transform: translateY(-.6rem) rotate(-45deg);
        }
        @media ( pointer: fine ) {
            :hover .burger {
                    transform: rotate(-90deg);
                }
            }
        }
    `}
`;

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
