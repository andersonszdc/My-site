import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 3.2rem;
  margin: 3.2rem;
  text-align: center;
  color: ${props => props.theme.colors.blue};
`

const Index: React.FC = () => {
  return (
    <Wrapper>Em breve...</Wrapper>
  );
}

export default Index;