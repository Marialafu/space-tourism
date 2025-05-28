import { TECH_INFO } from '../../constants/technology-info';
import { StyledContainer } from './technology-image.styled';

const TechnologyImage = ({ tab }) => {
  console.log(TECH_INFO[tab].img);

  return <StyledContainer $img={TECH_INFO[tab].img} />;
};

export default TechnologyImage;
