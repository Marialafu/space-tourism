import DestinationInfoContainer from '../../components/destination-info-container/DestinationInfoContainer';
import DestinationLabel from '../../components/destination-label/DestinationLabel';
import { StyledContainer } from './destination.styled';

const Destination = () => {
  return (
    <StyledContainer>
      <DestinationLabel />
      <DestinationInfoContainer />
    </StyledContainer>
  );
};

export default Destination;
