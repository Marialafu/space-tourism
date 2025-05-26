import { StyledLogo, StyledLogoContainer } from './header.styled';

const Header = () => {
  return (
    <StyledLogoContainer>
      <StyledLogo
        src='/assets/images/shared/logo.svg'
        alt='logo'
      />
    </StyledLogoContainer>
  );
};

export default Header;
