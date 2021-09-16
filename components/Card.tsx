import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'

const cardUp = keyframes`
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

const Wrapper = styled.div`
    display: inline-block;
    width: 33.333%;
    padding: 0 6px;
    .card__content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 30px;
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.background};
        height: 300px;
        border-radius: 6px;
        cursor: pointer;
        .card__title {
            font-size: 30px;
            font-weight: 700;
        }
        .card__verMais {
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }
    :hover p {
        animation: ${cardUp} .4s ease-in-out;
    }
    @media (max-width: 800px) {
        width: 50%;
    }
    @media (max-width: 400px) {
        width: 100%;
    }
`

const Card: React.FC = () => {
  return (
      <Wrapper>
          <div className="card__content">
            <p className="card__ano">2021</p>
            <p className="card__title">Title</p>
            <p className="card__verMais">Ver mais<FaAngleRight/></p>
          </div>
      </Wrapper>
  );
}

export default Card;