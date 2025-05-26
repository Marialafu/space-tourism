import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';
import { FONTS } from './fonts';

export const GlobalStyles = createGlobalStyle`

    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }
    html {
    scroll-behavior: smooth;
    }

    img {
    display: block;
    max-width: 100%;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    nav ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    }

    body {
    margin: 0;
    font-family: ${FONTS.primaryFont.family};
    font-weight: ${FONTS.primaryFont.weight};
    color: ${COLORS.white};
    background-image: url(/assets/images/home/background-home-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    }

`;
