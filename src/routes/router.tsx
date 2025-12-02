import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PATHS from '.';
import App from '@/App';
import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const Settings = lazy(() => import('@/pages/Settings'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.APP} element={<App />}>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.SETTINGS} element={<Settings />} />
    </Route>
  )
);