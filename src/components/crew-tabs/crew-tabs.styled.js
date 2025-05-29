import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const StyledTabContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media screen and (min-width: 1400px) {
        gap: 2.5rem;
    }
`

export const StyledTab = styled.div`
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: ${COLORS.white};
    opacity: ${({$tab, $eachTab}) => $tab === $eachTab ? '100%' : '25%'};
    cursor: pointer;

    @media screen and (min-width: 1400px) {
       width: 0.9375rem;
    height: 0.9375rem;
    }
`