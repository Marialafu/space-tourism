import styled from "styled-components";

export const StyledContainer = styled.div`
    background-image: url(${({$img}) => $img.mobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow-x: clip;
    min-height: 100vh;

    @media screen and (min-width: 768px) {
        background-image: url(${({$img}) => $img.tablet});
    }

    @media screen and (min-width: 1400px) {
        background-image: url(${({$img}) => $img.desktop});
    }
`