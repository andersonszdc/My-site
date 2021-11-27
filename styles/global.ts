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
        scroll-behavior: smooth;
    }

    li {
        list-style: none;
    }

    body {
        background-color: #2B2323;
        color: ${props => props.theme.colors.white};
        font-family: 'Montserrat', sans-serif;
        max-width: 1200px;
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

export default Global