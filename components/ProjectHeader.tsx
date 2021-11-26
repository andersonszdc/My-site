import React from 'react';
import styled from 'styled-components';
import headerProps from '../types/projectHeader';
import Link from 'next/link';

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    .header__title {
        font-size: 3.6rem;
    }

    .header__link {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${props => props.theme.colors.blue};
        margin-bottom: 1.6rem;
        cursor: pointer;
    }
    
    .header__data {
        display: flex;
        gap: 4.8rem;
        h2 {
            font-weight: 500;
            font-size: 2rem;
            color: ${props => props.theme.colors.blue};
        }
        h3 {
            font-weight: 500;
            font-size: 1.6rem;
        }
    }

    .data {
        display: flex;
        flex-direction: column;
        gap: .6rem;
    }
`

const ProjectHeader: React.FC<headerProps> = ({infos}) => {
    return (
        <HeaderDiv>
            <h1 className="header__title">{infos.title}</h1>
            <Link passHref href=''>
                <span className="header__link">Ver o projeto no ar</span>
            </Link>
            <div className="header__data">
                <div className="data">
                    <h2>CLIENTES</h2>
                    <h3>{infos.customer}</h3>
                </div>
                <div className="data">
                    <h2>ANO</h2>
                    <h3>{infos.year}</h3>
                </div>
            </div>
        </HeaderDiv>
    );
}

export default ProjectHeader;