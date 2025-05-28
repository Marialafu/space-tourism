import DestinationInfoContainer from '../../components/destination-info-container/DestinationInfoContainer';
import Label from '../../components/label/label';
import { StyledContainer } from './destination.styled';

const Destination = () => {
  return (
    <StyledContainer>
      <Label />
      <DestinationInfoContainer />
    </StyledContainer>
  );
};

export default Destination;
