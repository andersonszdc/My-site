import styled from "styled-components";

export const StyledLink = styled.a<any>`
  display: inline-flex;
  font-size: 1.4rem;
  align-items: center;
  color: ${(props) => (props.active ? props.theme.colors.blue : "#ccc")};
  text-decoration: none;
  transition: 0.3s ease;

  :hover {
    color: ${(props) => !props.active && `white`};
  }

  ${(props) =>
    !props.isTableTitle &&
    `
        background-image: linear-gradient(to right, ${props.theme.colors.blue}, ${props.theme.colors.blue});
        background-size: 0 2px;
        background-position: 0% 100%;
        background-repeat: no-repeat;
        color: ${props.theme.colors.blue};
        :hover {
            background-size: 100% 2px;
        }
    `};

  :focus {
    outline: none;
  }

  :focus-visible {
    box-shadow: inset 0 0 0 3 blue;
  }
`;
