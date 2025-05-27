import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FONTS } from "../../styles/fonts";
import { COLORS } from "../../styles/colors";

const StyledHamburguer = styled.img`
    width: 1.5rem;
    height: 1.3125rem;
    position: absolute;
    top: 2rem;
    left: 90%;

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
        height: 6rem;
        width: 40rem;
        padding: 2.4063rem 2.5rem 2.4063rem 7.3125rem;
        background-color: rgba(255, 255, 255, 0.05);
        flex-direction: row;
        gap: 3rem;
        translate: 0;
    }
    @media screen and (min-width: 1400px){
        top: 2.5rem;

        &::before{
            content: '';
            position: absolute;
            height: 0.0625rem;
            width: 35rem;
            top: 50%;
            left: -80%;
            background-color: rgba(255, 255, 255, 0.25);
        }
    }
`

const StyledMenuItem = styled.li `
    width: 100%;
    
`

const StyledLink = styled(NavLink)`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-weight: ${FONTS.secondaryCondensedFont.weight};
    font-size: ${FONTS.secondaryCondensedFont.size.medium};
    letter-spacing: ${FONTS.secondaryCondensedFont.letterSpacingMin};
    text-transform: uppercase;
    display: block;
    width: 100%;
    
    &.active{
        border-right: 0.3125rem solid ${COLORS.white};
    }
    
    @media (hover: hover) {
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        &.active{
            border-right: 0;
            
        }

        &.active::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 0.1875rem;
            background-color: white;
            top: 3.3125rem;
            left: 0px;
        }
    }
`
const StyledNumberItem = styled.span`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-weight: 900;
`

const StyledMenuItemContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    width: fit-content;
    position: relative;
`

export {StyledMenu, StyledMenuItem, StyledLink, StyledHamburguer, StyledNumberItem, StyledMenuItemContainer, StyledX}