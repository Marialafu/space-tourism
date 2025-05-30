import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 0 40px 0 40px;
    }
    @media screen and (min-width: 1400px) {
        padding-left: 10.3125rem;
        padding-right: 0;
    }
`
