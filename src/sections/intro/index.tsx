import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0, x: 100 },
};

const variants2 = {
  visible: {
    top: "-100%",
  },
  hidden: {
    top: "100%",
  },
};

const variants3 = {
  visible: {
    top: "0",
  },
  hidden: {
    top: "-100%",
  },
};

const Wrapper = styled(motion.div)<any>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled(motion.div)<any>`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100%;
  background-color: #424444;
  z-index: 20;
`;

const Intro = ({ setStartIntro, startIntro }: any) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [upOverlay, setUpOverlay] = useState(false);
  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 500);
  });
  return (
    <>
      <Wrapper
        startWrapper={startAnimation}
        variants={variants3}
        initial="visible"
        animate={upOverlay ? "hidden" : "visible"}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <p className="h2">
          <motion.span
            custom={1}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Criando incríveis
          </motion.span>
          <br />
          <motion.span
            custom={3}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            experiências
          </motion.span>
          <br />
          <motion.span
            custom={5}
            variants={variants}
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
        variants={variants2}
        initial="hidden"
        animate={upOverlay ? "visible" : "hidden"}
      />
    </>
  );
};

export default Intro;
