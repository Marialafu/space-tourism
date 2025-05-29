import styled from "styled-components";

const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-top: 5.5rem;
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) {
        margin-bottom: 2.5rem;
    }

    @media screen and (min-width: 1400px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
        padding-top: 1.25rem;
    }
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    @media screen and (min-width: 1400px) {
        gap: 11.8125rem;
        align-items: flex-start;
    }
`

export {StyledGrid, StyledContainer}