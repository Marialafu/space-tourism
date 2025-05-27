import {
  StyledContainer,
  StyledText,
  StyledTitle
} from './destination-info.styled';

const DestinationInfo = ({ destination }) => {
  return (
    <StyledContainer>
      <StyledTitle>{destination.name}</StyledTitle>
      <StyledText>{destination.info}</StyledText>
    </StyledContainer>
  );
};

export default DestinationInfo;
