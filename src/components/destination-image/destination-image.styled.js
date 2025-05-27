import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6563rem 0;

    @media screen and (min-width: 768px) {
        padding: 2.625rem 0;
    }
    @media screen and (min-width: 1400px) {
        padding: 0 1.8438rem;
    }
`
const StyledImg = styled.img`
    width: 9.375rem;

    @media screen and (min-width: 768px) {
        width: 18.75rem;
    }
    @media screen and (min-width: 1400px) {
        width: 30rem;
    }
`

export {StyledContainer, StyledImg}
