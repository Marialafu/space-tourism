import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 327px;

    @media screen and (min-width: 768px) {
        width: 32.125rem;
    }
    
    @media screen and (min-width: 1400px) {
        width: 27.8125rem;
        align-items: start;
        padding: 0 2.9375rem;
    }
`