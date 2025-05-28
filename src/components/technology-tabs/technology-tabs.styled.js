import styled from "styled-components";
import { FONTS } from "../../styles/fonts";
import { COLORS } from "../../styles/colors";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
`

const StyledTab = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({$tab, $eachtab}) => $tab === $eachtab ? 'white' :  'transparent'};
    color: ${({$tab, $eachtab}) => $tab === $eachtab ? 'black' :  'white'};

    @media screen and (min-width: 768px) {
        height: 3.5rem;
        width: 3.5rem; 
    }
`

export {StyledContainer, StyledTab}