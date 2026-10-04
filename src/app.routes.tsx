import { Navigate, type RouteObject } from 'react-router-dom';
import HomePage from './app/features/main-page/main-page.component.view';
import { lazy } from 'react';

const Home = HomePage;
const CNCMachining = lazy(
  () => import('./app/features/cnc-machining/cnc-machining.component.view')
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
  },
  { path: '/aboutUs' },
  {
    path: '/contactUs',
  },
];

export default routes;
