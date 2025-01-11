import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingPage from '@/pages/common/LoadingPage';
import ErrorPage from '@/pages/common/ErrorPage';
import { router } from '@/router';

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};
