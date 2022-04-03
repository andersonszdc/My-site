import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const lineVariants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0, x: 100 },
};

const overlayVariants = {
  visible: {
    y: "-100%",
  },
  hidden: {
    y: "100%",
  },
};

const wrapperVariants = {
  visible: {
    y: 0,
  },
  hidden: {
    y: "-100%",
  },
};

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #424444;
  z-index: 20;
`;

const Intro = ({ setStartIntro }: any) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [upOverlay, setUpOverlay] = useState(false);
  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 500);
  });
  return (
    <>
      <Wrapper
        variants={wrapperVariants}
        initial="visible"
        animate={upOverlay ? "hidden" : "visible"}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <p className="h2">
          <motion.span
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Criando incríveis
          </motion.span>
          <br />
          <motion.span
            custom={3}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            experiências
          </motion.span>
          <br />
          <motion.span
            custom={5}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            onAnimationComplete={() => setUpOverlay(true)}
          >
            na web.
          </motion.span>
        </p>
      </Wrapper>
      <Overlay
        transition={{ duration: 2, ease: "easeInOut" }}
        variants={overlayVariants}
        initial="hidden"
        animate={upOverlay ? "visible" : "hidden"}
        onAnimationComplete={() => setStartIntro(false)}
      />
    </>
  );
};

export default Intro;
