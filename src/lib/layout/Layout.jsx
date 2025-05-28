import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { StyledContainer } from './layout.styled';
import { BACKGROUND_IMAGE } from '../../constants/background-image';

const Layout = () => {
  const location = useLocation();
  const img = getImgFromLocation(location);

  return (
    <StyledContainer $img={img}>
      <Header />
      <Outlet />
    </StyledContainer>
  );
};

const getImgFromLocation = location => {
  const pathName = location.pathname.slice(1);
  const background =
    pathName === '' ? BACKGROUND_IMAGE.home : BACKGROUND_IMAGE[pathName];

  return background;
};

export default Layout;
