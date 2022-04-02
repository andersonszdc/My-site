import { motion } from "framer-motion";
import styled from "styled-components";
import { bleen } from "../../styles/global";

export const Wrapper = styled(motion.div)`
  padding: 40px 4%;

  .projects_title {
    ${bleen};
    width: max-content;
    margin-bottom: 4rem;
    scroll-margin-top: 100px;
  }

  .projects__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }

  @media (max-width: 800px) {
    .projects__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .projects__cards {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 400px) {
    .projects_title {
      font-size: 1.8rem;
      margin-bottom: 2.4rem;
    }
  }
`;
