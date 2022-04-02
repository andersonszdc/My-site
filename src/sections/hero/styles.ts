import { motion } from "framer-motion";
import styled from "styled-components";
import { bleen } from "../../styles/global";

export const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: auto 1fr;
  padding: 0 4% 80px 4%;
  align-items: center;
  min-height: calc(100vh - 80px);

  @media (max-width: 1000px) {
    display: flex;
    align-items: normal;
    flex-direction: column;
    gap: 3.2rem;
    padding-top: 15vh;
    padding-bottom: 0;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: 0.5s cubic-bezier(0.3, 0, 0.5, 1);
  max-width: 505px;

  .name {
    width: max-content;
    ${bleen};
    color: ${(props) => props.theme.colors.blue};
  }

  .highlight {
    ${bleen}
  }

  .hero_action {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 700px) {
    .name {
      font-size: 1.2rem;
    }
    .function {
      font-size: 2.4rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 400px) {
    .name {
      font-size: 1rem;
    }
    .function {
      font-size: 2rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }
`;

export const HeroImage = styled(motion.div)`
  display: inline-flex;
  justify-content: center;

  div {
    width: 350px;
  }

  @media (max-width: 1000px) {
    div {
      width: 275px;
    }
  }

  @media (max-width: 500px) {
    div {
      width: 200px;
    }
  }
`;
