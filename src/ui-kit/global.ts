import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`