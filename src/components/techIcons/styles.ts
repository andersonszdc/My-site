import styled from "styled-components";
import { iconLiProps } from ".";

export const TechsUl = styled.ul`
  display: flex;
`;

export const IconLi = styled.li<iconLiProps>`
  font-size: ${(props) => props.size};
  padding: ${(props) => props.padding};
`;
