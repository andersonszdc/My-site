import React from 'react'
import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import TechIcons, { TechListType } from './TechIcons'
import UnstyledLink from './links/UnstyledLink'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    cursor: pointer;
    border-radius: .8rem;
    border: 1px solid white;
    transition: .1s ease-in-out;
    :hover {
        transform: scale(1.015);
    }

    .card__title {
        font-size: 2rem;
        font-weight: 600;
    }

    .card__description {
        font-size: 1.4rem;
        font-weight: 400;
        margin-top: .4rem;
        margin-bottom: auto;
    }

    .card__image {
        border-radius: .4rem;
    }

    .card__ver {
        margin-top: .8rem;
        display: flex;
        align-items: center;
        gap: .4rem;
        font-size: 1.6rem;
        font-weight: 600;
    }
`

const Card = ({data}: any) => {
    console.log(data)
    return (
        <Link passHref href={data.link}>
            <Wrapper>
                    <p className="card__title">{data.title}</p>
                    <p className="card__description">{data.description}</p>
                    <TechIcons techs={data.techs.split(',') as Array<TechListType>} />
                    <Image className='card__image' width={400} height={250} layout='responsive' src={data.url} alt='mockup' />
                    <p className="card__ver">Ver mais<FaAngleRight/></p>
            </Wrapper>
        </Link>
    );
}

export default Card;