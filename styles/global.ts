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
        background-color: #333;
        color: ${props => props.theme.colors.text};
        font-family: 'Montserrat', sans-serif;
    }
`

export default Global