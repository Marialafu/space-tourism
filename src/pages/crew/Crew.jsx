import CrewContainer from '../../components/crew-container/CrewContainer';
import Label from '../../components/label/label';
import { StyledContainer } from './crew.styled';

const Crew = () => {
  return (
    <StyledContainer>
      <Label />
      <CrewContainer />
    </StyledContainer>
  );
};

export default Crew;
