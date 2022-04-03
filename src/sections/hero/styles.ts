import { motion } from "framer-motion";
import styled from "styled-components";
import { bleen } from "../../styles/global";

export const Wrapper = styled(motion.div)`
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
    padding-top: 90px;
    padding-bottom: 90px;
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

  @media (max-width: 600px) {
    --text-multiplier: 0.75;
  }

  @media (max-width: 420px) {
    --text-multiplier: 0.6;
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
      width: clamp(0px, 80vw, 450px);
    }
  }
`;
