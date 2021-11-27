import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import deliveryCover from '../assets/delivery-cover.png';
import siteCover from '../assets/site-cover.png';

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
    position: relative;
    display: inline-block;
    width: 33.333%;
    padding: 0 .6rem;
    cursor: pointer;

    .card__mockup {
        transition: .2s ease-in-out;
        img {
            border-radius: .6rem;
            transition: .2s ease-in-out;
        }
    }

    :hover {
        p {
            animation: ${cardUp} .4s ease-in-out;
        }
        .card__verMais {
            display: inline-flex;
        }
        .card__mockup {
            opacity: 0.3;
            img {
                transform: scale(1.1);
            }
        }
    }

    @media (max-width: 816px) {
        width: 50%;
    }

    @media (max-width: 502px) {
        width: 100%;
    }
`

const CardContent = styled.div`
    cursor: pointer;
    width: 80%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 3rem;
    color: ${props => props.theme.colors.text};
    height: 30rem;

    .card__ano {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${props => props.theme.colors.blue};
    }
    .card__title {
        white-space: normal;
        font-size: 2.4rem;
        font-weight: 700;
    }
    .card__verMais {
        cursor: pointer;
        font-weight: 500;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: 4px;
        display: none;
    }

    @media (max-width: 1008px) {
        .card__title {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 816px) {
        .card__title {
            font-size: 2.4rem;
        }
    }

    @media (max-width: 672px) {
        .card__title {
            font-size: 2rem;
        }
    }

    @media (max-width: 586px) {
        .card__title {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 502px) {
        .card__title {
            font-size: 2.2rem;
        }
    }

    @media (max-width: 314px) {
        .card__title {
            font-size: 1.6rem;
        }
    }
`

const Card = ({data}: any) => {
    console.log(data)
    return (
        // <Link passHref href={data.link}>
            <Wrapper>
                <CardContent>
                    <p className="card__ano">{data.slug}</p>
                    <p className="card__title">{data.title}</p>
                    <p className="card__verMais">Ver mais<FaAngleRight/></p>
                </CardContent>
                {/* <div className="card__mockup">
                    <Image className='card__image' layout='responsive' src={data.cover} alt='mockup' />
                </div> */}
            </Wrapper>
        // </Link>
    );
}

export default Card;