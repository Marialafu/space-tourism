import styled from "styled-components";
import { BACKGROUND_IMAGE } from "../../constants/background-image";

export const StyledContainer = styled.div`
    background-image: url(${BACKGROUND_IMAGE.home.mobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow-x: clip;
`