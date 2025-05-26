import styled from "styled-components";

export const StyledLogoContainer = styled.div`
    padding: 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 1.5rem 2.5rem;
        
    }
    @media screen and (min-width: 1400px) {
        padding: 4rem 0 1.5rem 4rem;
    }

`

export const StyledLogo = styled.img`
    width: 2.5rem;

    @media screen and (min-width: 768px) {
        width: 3rem;
    }
`