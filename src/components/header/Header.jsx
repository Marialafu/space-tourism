import { Link } from 'react-router-dom';
import { HOME_INFO } from '../../constants/home-info';
import Menu from '../menu/Menu';
import {
  StyledHeaderContainer,
  StyledLogo,
  StyledLogoContainer
} from './header.styled';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer>
        <Link to={'/'}>
          {
            <StyledLogo
              src='/assets/images/shared/logo.svg'
              alt='logo'
            />
          }
        </Link>
      </StyledLogoContainer>
      <Menu />
    </StyledHeaderContainer>
  );
};

export default Header;
