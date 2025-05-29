import { CREW_INFO } from '../../constants/crew-info';
import {
  StyledContainer,
  StyledTagText,
  StyledText,
  StyledTitle
} from './crew-text.styled';

const CrewText = ({ tab }) => {
  const tabInfo = CREW_INFO[tab];

  return (
    <StyledContainer>
      <StyledTagText>{tabInfo.grade}</StyledTagText>
      <StyledTitle>{tabInfo.name}</StyledTitle>
      <StyledText>{tabInfo.info}</StyledText>
    </StyledContainer>
  );
};

export default CrewText;
