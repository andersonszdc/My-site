import { createGlobalStyle, css, keyframes } from "styled-components";
import pattern from "./themes/light";

interface GlobalProps {
  theme: typeof pattern;
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

    body {
        background-color: #2B2323;
        color: ${(props) => props.theme.colors.white};
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
            background-color: ${(props) => props.theme.colors.blue};
            border-radius: 20px;
            }
    }

    button, input, textarea {
        font-family: inherit;
    }

    a {
        color: inherit;
    }

    li {
        list-style: none;
    }

    .animated-underline {
        transition: 0.2s ease-in-out;
        width: max-content;
        background-size: 0 2px;
        background-position: 0% 100%;
        background-image: linear-gradient(
            270deg,
            hsl(173deg 100% 50%) 0%,
            hsl(179deg 91% 49%) 50%,
            hsl(185deg 82% 49%) 100%
        );
        background-repeat: no-repeat;
    }
`;

export const bleen = css`
  background-image: linear-gradient(
    90deg,
    hsl(185deg 82% 49%) 0%,
    hsl(179deg 91% 49%) 50%,
    hsl(173deg 100% 50%) 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Global;
