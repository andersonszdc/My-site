import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #333;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }
`

export default Global