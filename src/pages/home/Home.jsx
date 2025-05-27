import { Link } from 'react-router-dom';
import { HOME_INFO } from '../../constants/home-info';
import {
  StyledButtonContainer,
  StyledButtonText,
  StyledGrid,
  StyledTag,
  StyledText,
  StyledTextContainer,
  StyledTitle
} from './home.styled';

const Home = () => {
  return (
    <StyledGrid>
      <StyledTextContainer>
        <StyledTag>{HOME_INFO.tag}</StyledTag>
        <StyledTitle>{HOME_INFO.title}</StyledTitle>
        <StyledText>{HOME_INFO.text}</StyledText>
      </StyledTextContainer>
      <StyledButtonContainer>
        <StyledButtonText>
          <Link to={'/destination'}>{HOME_INFO.button}</Link>
        </StyledButtonText>
      </StyledButtonContainer>
    </StyledGrid>
  );
};

export default Home;
