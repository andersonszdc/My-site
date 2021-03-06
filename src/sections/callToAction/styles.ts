import styled from "styled-components";
import { bleen } from "../../styles/global";

export const Wrapper = styled.div`
  text-align: center;
  margin: 9rem 0;
  .call-two {
    ${bleen};
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
    cursor: pointer;
    :hover {
      .span-underline {
        background-size: 100% 100%;
      }
    }
  }
  .call-action {
    display: inline-flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: 1.2rem;
    .icon {
      color: ${(props) => props.theme.colors.blue};
    }
  }
  .span-underline {
    display: block;
    width: 100%;
    height: 0.5rem;
    border-radius: 0.6rem;
    transition: 0.3s ease-in-out;
    background-size: 0 100%;
    background-position: 0% 100%;
    background-image: linear-gradient(90deg, #00ffe0, #16d3e4);
    background-repeat: no-repeat;
  }

  @media (max-width: 600px) {
    .call-one {
      font-size: 1.4rem;
    }
    .call-action {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 400px) {
    margin: 3.2rem 0;
    .call-one {
      font-size: 1.2rem;
    }
    .call-action {
      font-size: 1.8rem;
    }
  }
`;
