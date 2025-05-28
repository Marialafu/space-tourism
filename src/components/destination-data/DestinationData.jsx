import { StyledText } from '../destination-info/destination-info.styled';
import {
  StyledContainer,
  StyledDataContainer,
  StyledTitle
} from './destination-data.styled';

const DestinationData = ({ destination }) => {
  return (
    <StyledContainer>
      <StyledDataContainer>
        <StyledTitle>{destination.av}</StyledTitle>
      </StyledDataContainer>
    </StyledContainer>
  );
};

export default DestinationData;
