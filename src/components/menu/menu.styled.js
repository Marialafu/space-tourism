import { Link } from "react-router-dom";
import styled from "styled-components";
import { FONTS } from "../../styles/fonts";

const StyledHamburguer = styled.img`
    width: 1.5rem;
    height: 1.3125rem;
    position: absolute;
    top: 2rem;
    left: 87%;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

const StyledX = styled(StyledHamburguer)`
    width: 1.1875rem;
    height: 1.1875rem;
    z-index: 2;
`


const StyledMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    padding: 8.3125rem 0 0 2rem;
    height: 100vh;
    width: 65vw;
    backdrop-filter: blur(80px);
    background-color: rgba(11, 13, 23, 0.15);
    translate: ${({$openMenu}) => $openMenu ? '0' : '100%'};
    transition: translate 0.5s;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 3rem;
    }
`

const StyledMenuItem = styled.li `

`

const StyledLink = styled(Link)`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-weight: ${FONTS.secondaryCondensedFont.weight};
    font-size: ${FONTS.secondaryCondensedFont.size.medium};
    letter-spacing: ${FONTS.secondaryCondensedFont.letterSpacingMin};
    text-transform: uppercase;
    
    @media (hover: hover) {
        cursor: pointer;
    }
`
const StyledNumberItem = styled.span`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-weight: 900;
`

const StyledMenuItemContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`

export {StyledMenu, StyledMenuItem, StyledLink, StyledHamburguer, StyledNumberItem, StyledMenuItemContainer, StyledX}