import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100vw;
    height: 48rem;
    background-image: url(${({$img}) => $img.landscape});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 1400px) {
    width: 38rem;
    height: 45.875rem;
    background-image: url(${({$img}) => $img.portrait});
    }
`


export {StyledContainer}