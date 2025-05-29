import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100vw;
    height: 29.25rem;
    background-image: url(${({$img}) => $img.landscape});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 1400px) {
    min-width: 608px;
    max-width: 1000px;
    height: 37.5rem;
    background-image: url(${({$img}) => $img.portrait});
    }
`


export {StyledContainer}