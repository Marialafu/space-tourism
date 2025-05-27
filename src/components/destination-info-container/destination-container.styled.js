import styled from "styled-components";

const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media screen and (min-width: 1400px) {
        flex-direction: row;
        gap: 2rem;
        padding: 5rem 0
    }
`

export {StyledGrid}