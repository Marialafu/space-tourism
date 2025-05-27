import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 20.4375rem;

    @media screen and (min-width: 768px) {
        width: 43rem;
    }
    
    @media screen and (min-width: 1400px) {
        width: 33.6875rem;
        align-items: start;
        padding: 0 2.9375rem;
    }
`