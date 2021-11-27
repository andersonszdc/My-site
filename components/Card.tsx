import React from 'react'
import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'
import TechIcons, { TechListType } from './TechIcons'
import { FirebaseImg } from './images/firebaseImg'

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
    return (
        <Link passHref href={`/projects/${data.slug}`}>
            <Wrapper>
                    <p className="card__title">{data.title}</p>
                    <p className="card__description">{data.description}</p>
                    <TechIcons techs={data.techs.split(',') as Array<TechListType>} />
                    <FirebaseImg fileName={data.cover} classname="card__image" width={1300} height={650} layout='responsive' />
                    <p className="card__ver">Ver mais<FaAngleRight/></p>
            </Wrapper>
        </Link>
    );
}

export default Card;