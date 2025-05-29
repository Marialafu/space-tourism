import styled from "styled-components";
import { FONTS } from "../../styles/fonts";
import { COLORS } from "../../styles/colors";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 20.4375rem;

    @media screen and (min-width: 768px) {
        width: 32rem;
    }

    @media screen and (min-width: 1400px) {
        justify-content: start;
        align-items: start;
        width: 30.6875rem;
    }
`

const StyledTagText = styled.span`
    font-size: ${FONTS.primaryFont.size.extraSmall}px;
    opacity: 75%;
    text-transform: uppercase;
`

const StyledTitle = styled.h2`
    margin: 0;
    font-size: ${FONTS.primaryFont.size.small}px;
    text-transform: uppercase;
`

const StyledText = styled.p`
    color: ${COLORS.blue300};
    font-size: ${FONTS.secondaryFont.size.medium}px;
    font-family: ${FONTS.secondaryFont.family};
    text-align: center;

    @media screen and (min-width: 1400px) {
        text-align: left;
    }
`

export {StyledContainer, StyledTagText, StyledTitle, StyledText}