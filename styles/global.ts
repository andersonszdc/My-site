import { createGlobalStyle } from "styled-components"
import pattern from './themes/pattern'

interface GlobalProps {
    theme: typeof pattern
}

const Global = createGlobalStyle<GlobalProps>`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #2B2323;
        color: ${props => props.theme.colors.text};
        font-family: 'Montserrat', sans-serif;
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