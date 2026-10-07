import { Navigate, type RouteObject } from 'react-router-dom';
import HomePage from './app/features/main-page/main-page.component';
import { lazy } from 'react';

const Home = HomePage;
const CNCMachining = lazy(
  () => import('./app/features/cnc-machining/cnc-machining.component')
);
const ColdExtrusion = lazy(
  () => import('./app/features/cold-extrusion/cold-extrusion.component')
);
const AboutUs = lazy(
  () => import('./app/features/about-us/about-us.component')
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/cncMachining',
    element: <CNCMachining />,
  },
  {
    path: '/coldExtrusion',
    element: <ColdExtrusion />,
  },
  {
    path: '/aboutUs',
    element: <AboutUs />,
  },
  {
    path: '/contactUs',
  },
];

export default routes;
