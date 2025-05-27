import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { StyledContainer } from './layout.styled';

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <StyledContainer>
      <Header />
      <Outlet />
    </StyledContainer>
  );
};

export default Layout;
