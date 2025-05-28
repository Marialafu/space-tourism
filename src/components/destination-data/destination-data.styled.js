import { COLORS } from "../../styles/colors"
import { FONTS } from "../../styles/fonts"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 1.5rem;
    }
`

const StyledDataContainer = styled(StyledContainer)`
    gap: 0.75rem;

    @media screen and (min-width: 768px) {
        flex-direction: column;
        max-width: 15.3125rem;
    }

    @media screen and (min-width: 1400px) {
        max-width: 13.1563rem;
        gap: 0;
        justify-content: start;
        align-items: start;
    }
`

const StyledTitle = styled.span`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-weight: ${FONTS.secondaryCondensedFont.weight};
    font-size: ${FONTS.secondaryCondensedFont.size.small};
    color: ${COLORS.blue300};
    letter-spacing: ${FONTS.secondaryCondensedFont.letterSpacingMin};
`

const StyledText = styled.span`
    font-size: ${FONTS.primaryFont.size.extraSmall};
`

export {StyledContainer, StyledDataContainer, StyledTitle, StyledText}