import { lazy } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  useRouteError,
} from 'react-router-dom';

const MainPage = lazy(() => import('@/pages/MainPage'));

const routing: RouteObject[] = [
  {
    path: '/',
    Component: MainPage,
  },
];

const RoutingErrorBoundary = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = useRouteError();

  return <div>Something went wrong: routing error</div>;
};

export const router = createBrowserRouter([
  {
    hasErrorBoundary: true,
    ErrorBoundary: RoutingErrorBoundary,
    path: '/',
    element: <Outlet />,
    children: routing,
  },
]);
