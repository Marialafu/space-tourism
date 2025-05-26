import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Crew from '../../pages/crew/Crew';
import Destination from '../../pages/destination/Destination';
import Technology from '../../pages/technology/Technology';
import { v4 } from 'uuid';
import Home from '../../pages/home/Home';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='crew'
          element={<Crew />}
        />
        <Route
          key={v4()}
          path='destination'
          element={<Destination />}
        />
        <Route
          path='technology'
          element={<Technology />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
