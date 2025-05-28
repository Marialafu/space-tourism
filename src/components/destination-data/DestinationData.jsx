import {
  StyledContainer,
  StyledDataContainer,
  StyledText,
  StyledTitle
} from './destination-data.styled';

const DestinationData = ({ destination }) => {
  return (
    <StyledContainer>
      <StyledDataContainer>
        <StyledTitle>AVG. DISTANCE</StyledTitle>
        <StyledText>{destination.averageData}</StyledText>
      </StyledDataContainer>
      <StyledDataContainer>
        <StyledTitle>Est. travel time</StyledTitle>
        <StyledText>{destination.travelTimeData}</StyledText>
      </StyledDataContainer>
    </StyledContainer>
  );
};

export default DestinationData;
