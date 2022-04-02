import styled from "styled-components";
import { WrapperProps } from ".";

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10%;

  p {
    margin: 1.8rem 0;
  }

  .contrast {
    color: ${(props) => props.theme.colors.blue};
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
    padding: 4rem;
    background-color: ${({ theme }) => theme.colors.gray4};
    border-radius: 1.6rem;
  }

  .input-message {
    grid-row: 1/4;
    grid-column: 2/3;
  }

  .form__action {
    display: grid;
    padding: 0 25%;
    grid-column: 1/3;
  }

  .inputs {
    border-radius: 0.8rem;
    border: 1px solid ${(props) => props.theme.colors.text};
    padding: 1.4rem;
    font-family: "Montserrat";
    font-size: 1.4rem;
    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
  }

  .send {
    width: 100%;
    border: none;
    padding: 1.2rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    margin: 1.6rem auto 0 auto;
    font-weight: 600;
    background-color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
    ${({ loading }) => (loading ? "opacity: 0.5" : "opacity: 1")};
  }

  .sucess {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.blue};
  }

  .error {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    color: #f21e0c;
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
