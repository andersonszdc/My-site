import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  margin: 3.2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

const Index = () => {
  return (
    <Wrapper
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      className="h3"
    >
      Em breve...
    </Wrapper>
  );
};

export default Index;
