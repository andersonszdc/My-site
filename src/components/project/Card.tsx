import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import TechIcons, { TechListType } from "../techIcons";
import Image from "next/image";
import { Frontmatter } from "../../types/frontmatters";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  cursor: pointer;
  border-radius: 0.8rem;
  transition: 0.1s ease-in-out;
  border: 1px solid #faf8f8;

  :hover {
    transform: scale(1.015);
    .card__ver {
      background-size: 100% 2px;
    }
  }

  .card__title {
    font-size: 2rem;
    font-weight: 600;
  }

  .card__description {
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.4rem;
    margin-bottom: auto;
  }

  .card__image {
    border-radius: 0.4rem;
  }

  .card__ver {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

type IndexProps = {
  data: Frontmatter;
};

const Card = ({ data }: IndexProps) => {
  return (
    <Link passHref href={`/projects/${data.slug}`}>
      <Wrapper>
        <p className="card__title">{data.title}</p>
        <p className="card__description">{data.description}</p>
        <TechIcons techs={data.techs.split(",") as Array<TechListType>} />
        <Image
          priority
          alt="cover-project"
          src={data.cover}
          className="card__image"
          width={1300}
          height={650}
          layout="responsive"
        />
        <p className="card__ver animated-underline">
          Ver mais
          <FaAngleRight />
        </p>
      </Wrapper>
    </Link>
  );
};

export default Card;
