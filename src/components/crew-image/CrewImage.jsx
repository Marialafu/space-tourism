import { CREW_INFO } from '../../constants/crew-info';
import { StyledImgContainer } from './crew-image.styled';

const CrewImage = ({ tab }) => {
  return (
    <StyledImgContainer>
      <img src={CREW_INFO[tab].img} />
    </StyledImgContainer>
  );
};

export default CrewImage;
