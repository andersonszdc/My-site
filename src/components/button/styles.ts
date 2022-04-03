import styled from "styled-components";

export const Btn = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  height: 40px;
  border-radius: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 0 clamp(0px, 5vw, 40px);
  transition: 0.1s ease-out;

  :hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 420px) {
    font-size: 1.2rem;
    height: 30px;
  }
`;

export const HGLBtn = styled.button`
  background-image: linear-gradient(
    90deg,
    hsl(173deg 100% 50%) 0%,
    hsl(179deg 91% 49%) 50%,
    hsl(185deg 82% 49%) 100%
  );
  font-size: 1.6rem;
  font-weight: 600;
  height: 40px;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: 0.1s ease-out;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 420px) {
    font-size: 1.2rem;
    height: 30px;
  }
`;
