import { createGlobalStyle } from "styled-components"
import pattern from './themes/pattern'
import styled from 'styled-components';

interface GlobalProps {
    theme: typeof pattern
}
const Global = createGlobalStyle<GlobalProps>`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    li {
        list-style: none;
    }

    body {
        background-color: #2B2323;
        color: ${props => props.theme.colors.white};
        font-family: 'Montserrat', sans-serif;
        max-width: 1600px;
        margin: 0 auto;

        ::-webkit-scrollbar {
            width: 2px;
            }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.blue};
            border-radius: 20px;
            }
    }
`

export const ProjectDiv = styled.div`
    margin: 0 auto;
    margin-bottom: 4.8rem;
    display: flex;
    flex-direction: column;
    max-width: 640px;

    .content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .content__title {
        font-size: 2.4rem;
        font-weight: 600;
        color: ${props => props.theme.colors.blue};
    }

    .content__res {
        font-size: 1.8rem;
        font-weight: 400;
    }

    .content__list {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }

    .list__item {
        display: flex;
        align-items: center;
        gap: .8rem;
        font-size: 1.8rem;
        font-weight: 400;
        ::before {
            display: flex;
            background: ${props => props.theme.colors.blue};
            content: '';
            width: 36px;
            height: 4px;
            border-radius: 4px;
        }       
    }

    .content__img {
        border-radius: .8rem;
    }
`

export const Separator = styled.span`
    content: '';
    display: block;
    height: 2px;
    background: ${props => props.theme.colors.blue};
    margin: 3.2rem 0;
    border-radius: 1rem;
`

export const TechDiv = styled.div`
    display: flex;
    gap: 2.4rem;
`

export default Global