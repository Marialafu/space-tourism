import styled from "styled-components";
import { FONTS } from "../../styles/fonts";
import { COLORS } from "../../styles/colors";

const StyledGrid = styled.div`
    display: grid;

    @media screen and (min-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 8rem 10.3125rem;
    }
`

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;

    @media screen and (min-width: 1400px) {
        align-items: first baseline;
    }
`

const StyledTag = styled.span`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-weight: ${FONTS.secondaryCondensedFont.weight};
    font-size: ${FONTS.secondaryCondensedFont.size.medium}px;
    letter-spacing: 15%;
    color: ${COLORS.white};

    @media screen and (min-width: 768px) {
        font-size: ${FONTS.secondaryCondensedFont.size.large}px;
    }
`

const StyledTitle = styled.h1`
    font-size: ${FONTS.primaryFont.size.large}px;
    margin: 0;

    @media screen and (min-width: 768px) {
        font-size: ${FONTS.primaryFont.size.extraLarge}px;
    }
`

const StyledText = styled.p`
    text-align: center;
    font-family: ${FONTS.secondaryFont.family};
    font-weight: ${FONTS.secondaryFont.weight};
    font-size: ${FONTS.secondaryFont.size.medium}px;
    width: 31.25rem;

     @media screen and (min-width: 768px) {
        font-size: ${FONTS.secondaryFont.size.large}px;
    }

    @media screen and (min-width: 1400px) {
        text-align: left;
    }
`

const StyledButtonText = styled.span`
    color: ${COLORS.blue900};
    font-size: ${FONTS.secondaryFont.size.medium}px;
    text-transform: uppercase;
    width: 9rem;
    height: 9rem;
    border-radius: 100%;
    background-color: ${COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 17rem;
        height: 17rem;
        border-radius: 100%;
        font-size: ${FONTS.primaryFont.size.small}px;
    }
`

const StyledButtonContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7.4375rem 0;

    @media screen and (min-width: 768px) {
        padding: 4.125rem 7.5rem;
    }
    @media screen and (min-width: 1400px) {
        padding: 0;
        padding-left: 15.625rem;
    }
`

export {StyledGrid, StyledTextContainer, StyledTag, StyledTitle, StyledText, StyledButtonText, StyledButtonContainer}