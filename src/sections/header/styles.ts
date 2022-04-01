import styled from "styled-components";
import { StyledProps } from ".";
import { bleen } from "../../styles/global";

export const Wrapper = styled.div<StyledProps>`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 4%;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.black};
`;

export const Me = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  z-index: 10;
  cursor: pointer;
  .me__logo {
    width: 4rem;
  }
  .me__title {
    margin-bottom: 0.6rem;
    transition: 0.5s cubic-bezier(0.3, 0, 0.5, 1);
    color: ${(props) => props.theme.colors.text};
  }
  .me__subtitle {
    background-color: black;
    ${bleen}
  }
  .destaqui {
    ${bleen}
  }
  @media (max-width: 400px) {
    .me__logo {
      width: 2.4rem;
    }
    .me__title {
      font-size: 1.2rem;
    }
    .me__subtitle {
      font-size: 0.9rem;
    }
  }
`;

export const MenuBtn = styled.div<StyledProps>`
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
