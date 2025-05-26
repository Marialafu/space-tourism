import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
