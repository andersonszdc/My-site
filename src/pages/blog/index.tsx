import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3.2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

const Index = () => {
  return <Wrapper className="h3">Em breve...</Wrapper>;
};

export default Index;
