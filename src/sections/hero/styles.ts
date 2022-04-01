import styled from "styled-components";
import { WrapperProps } from ".";
import { bleen } from "../../styles/global";

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  position: relative;
  grid-template-columns: auto 1fr;
  padding: 0 4% 80px 4%;
  align-items: center;
  min-height: calc(100vh - 80px);

  [data-fade] {
    transition: 400ms ease-out;
    transform: translateY(6rem);
    opacity: 0;
  }

  ${(props) =>
    props.inView &&
    `
    [data-fade] {
      transform: translateY(0);
      opacity: 1;
    }

    [data-fade='1'] {
      transition-delay: 100ms;
    }

    [data-fade='2'] {
      transition-delay: 200ms;
    }

    [data-fade='3'] {
      transition-delay: 300ms;
    }

    [data-fade='4'] {
      transition-delay: 400ms;
    }
  `}

  .icon__down {
    display: flex;
    justify-content: center;
    font-size: 4rem;
    position: absolute;
    bottom: 6.4rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: ${(props) => props.theme.colors.blue};
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: normal;
    flex-direction: column;
    gap: 3.2rem;
    padding-top: 15vh;
    padding-bottom: 0;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: none;
  padding: 8px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  transition: 0.1s ease-out;

  :hover {
    transform: scale(1.03);
  }
`;

export const HGLButton = styled(Button)`
  border: none;
  padding: 2px;
  background: linear-gradient(
    90deg,
    hsl(173deg 100% 50%) 0%,
    hsl(179deg 91% 49%) 50%,
    hsl(185deg 82% 49%) 100%
  );

  .module {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 8px;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: 0.5s cubic-bezier(0.3, 0, 0.5, 1);

  .name {
    width: max-content;
    ${bleen};
    color: ${(props) => props.theme.colors.blue};
  }

  .highlight {
    ${bleen};
  }

  .hero_action {
    display: flex;
    gap: 16px;
  }

  @media (max-width: 700px) {
    .name {
      font-size: 1.2rem;
    }
    .function {
      font-size: 2.4rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 400px) {
    .name {
      font-size: 1rem;
    }
    .function {
      font-size: 2rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }
`;

export const HeroImage = styled.div`
  display: inline-flex;
  justify-content: center;

  div {
    width: 350px;
  }

  @media (max-width: 1000px) {
    div {
      width: 275px;
    }
  }

  @media (max-width: 500px) {
    div {
      width: 200px;
    }
  }
`;