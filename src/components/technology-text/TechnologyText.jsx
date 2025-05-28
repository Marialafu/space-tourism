import { TECH_INFO } from '../../constants/technology-info';
import {
  StyledContainer,
  StyledTagText,
  StyledText,
  StyledTitle
} from './technology-text.styled';

const TechnologyText = ({ tab }) => {
  const tabInfo = TECH_INFO[tab];
  console.log(tabInfo);

  return (
    <StyledContainer>
      <StyledTagText>THE TERMINOLOGY…</StyledTagText>
      <StyledTitle>{tabInfo.name}</StyledTitle>
      <StyledText>{tabInfo.info}</StyledText>
    </StyledContainer>
  );
};

export default TechnologyText;
