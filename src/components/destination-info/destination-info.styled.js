import styled from "styled-components";
import { FONTS } from "../../styles/fonts";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (min-width: 1400px) {
        align-items: start;
    }
`

const StyledTitle = styled.h2`
    font-size: ${FONTS.primaryFont.size.medium}px;
    text-transform: uppercase;
    margin: 0;

    @media screen and (min-width: 1400px) {
        font-size: ${FONTS.primaryFont.size.large}px;
    }
`

const StyledText = styled.p`
    font-family: ${FONTS.secondaryFont.family};
    font-weight: ${FONTS.secondaryFont.weight};
    font-size: ${FONTS.secondaryFont.size.medium}px;
    text-align: center;

    @media screen and (min-width: 1400px) {
        text-align: start;
        font-size: ${FONTS.secondaryFont.size.large}px;
    }
`

export {StyledContainer, StyledTitle, StyledText}