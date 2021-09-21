import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

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
    padding: 0 6px;
    .card__content {
        width: 80%;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 30px;
        color: ${props => props.theme.colors.text};
        height: 300px;
        cursor: default;
        .card__ano {
            font-weight: 500;
            color: #ccc;
        }
        .card__title {
            white-space: normal;
            font-size: 24px;
            font-weight: 700;
        }
        .card__verMais {
            cursor: pointer;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 4px;
            display: none;
        }
    }
    .card__mockup {
        width: 100%;
        transition: .2s ease-in-out;
        div {
            border-radius: 6px;
        }
        img {
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
    @media (max-width: 800px) {
        width: 50%;
    }
    @media (max-width: 400px) {
        width: 100%;
    }
`

const Card = ({data, uid}: any) => {
    console.log(uid)
    return (
            <Wrapper>
                <div className="card__content">
                    <p className="card__ano">{data.year}</p>
                    <p className="card__title">{data.title[0].text}</p>
                    <Link
                    passHref
                    href={{
                        pathname: '/[projeto]',
                        query: {projeto: `${uid}`},
                    }}>
                        <p className="card__verMais">Ver mais<FaAngleRight/></p>
                    </Link>
                </div>
                <div className="card__mockup">
                    <Image width={data.cover.dimensions.width} height={data.cover.dimensions.height} className='card__image' layout='responsive' src={data.cover.url} alt='mockup' />
                </div>
            </Wrapper>
    );
}

export default Card;