import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        font-family: 'Figtree', Verdana, Geneva, Tahoma, sans-serif;
        background-color: ${({theme}) => theme.colors.yellow};
    }

    div#root {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;