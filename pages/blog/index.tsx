import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import { getAllFilesFrontmatter } from '../../lib/mdx';

const Wrapper = styled.div`
  font-size: 3.2rem;
  margin: 3.2rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
`

const Index: React.FC = () => {
  return (
    <Wrapper>Em breve...</Wrapper>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllFilesFrontmatter('blog')
  // const tags = getTags(files)

  return { props: files}
}