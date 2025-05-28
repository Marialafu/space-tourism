import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 327px;
    position: relative;
    margin-bottom: 3.0625rem;

    &::after{
        content: '';
        position: absolute;
        top: 15.5rem;
        width: 100%;
        height: 0.0625rem;
        background-color: ${COLORS.white};
        opacity: 75%;
    }

    @media screen and (min-width: 768px) {
        width: 32.125rem;
    }
    
    @media screen and (min-width: 1400px) {
        width: 27.8125rem;
        align-items: start;
        padding: 0 2.9375rem;
    }
`