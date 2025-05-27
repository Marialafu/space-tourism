import styled from "styled-components";
import { FONTS } from "../../styles/fonts";

const StyledContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
        justify-content: start;
    }
`

const StyledText = styled.span`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-size: ${FONTS.secondaryCondensedFont.size.medium}px;
    letter-spacing: ${FONTS.secondaryCondensedFont.letterSpacing}px;

    @media screen and (min-width: 768px) {
        font-size: ${FONTS.secondaryCondensedFont.size.large}px;
    }
`

const StyledTitle = styled(StyledText)`
    font-weight: ${FONTS.secondaryCondensedFont.weight};
`

const StyledNumber = styled(StyledText)`
    font-weight: 900;
    opacity: 25%;
`

export {StyledContainer, StyledTitle, StyledNumber}