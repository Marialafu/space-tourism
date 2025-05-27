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
        <StyledLogo
          src='/assets/images/shared/logo.svg'
          alt='logo'
        />
      </StyledLogoContainer>
      <Menu />
    </StyledHeaderContainer>
  );
};

export default Header;
