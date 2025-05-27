import styled from "styled-components"
import { FONTS } from "../../styles/fonts"

const StyledContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: space-around;
`

const StyledTab = styled.span`
    font-family: ${FONTS.secondaryCondensedFont.family};
    font-weight: ${FONTS.secondaryCondensedFont.weight};
    font-size: ${FONTS.secondaryCondensedFont.size.small}px;
    text-transform: uppercase;
    padding-bottom: 0.625rem;
    border-bottom: 0.1875rem solid ${({$tab, $eachTab}) => $tab === $eachTab ? 'white' : 'transparent'};
    opacity: ${({$tab, $eachTab}) => $tab === $eachTab ? '100%' : '60%'};

    @media screen and (min-width: 768px) {
        font-size: ${FONTS.secondaryCondensedFont.size.medium}px;
    }

    @media screen and (min-width: 1400px) {
        font-size: ${FONTS.secondaryCondensedFont.size.large}px;
    }
`

export {StyledContainer, StyledTab}