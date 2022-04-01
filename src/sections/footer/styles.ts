import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 4% 1.6rem 4%;
  align-items: center;
  border-top: 1px solid white;
  padding-top: 3.6rem;

  span {
    display: block;
    border-top: 0.1rem solid white;
    width: 100%;
    margin-bottom: 9rem;
  }

  .footer__abas {
    display: flex;
    gap: 6.4rem;
  }

  .abas__item {
    cursor: pointer;
    transition: 0.2s ease-out;
    color: ${(props) => props.theme.colors.blue};

    :hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  .redes__title {
    text-align: center;
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
  }

  .footer__icons {
    display: flex;
    gap: 2.4rem;
  }

  .icon {
    font-size: 3rem;
    cursor: pointer;
    transition: 0.2s ease-out;
    color: ${(props) => props.theme.colors.blue};

    :hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  .credit {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.white};
    }
  }

  .logo {
    width: 2.5rem;
  }

  @media (max-width: 560px) {
    .footer__abas {
      flex-direction: column;
      align-items: center;
      gap: 3.2rem;
      margin-bottom: 3.2rem;
    }

    .redes__title {
      display: none;
    }
  }
`;
