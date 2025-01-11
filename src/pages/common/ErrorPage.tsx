import { FallbackProps } from 'react-error-boundary';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className={'flex justify-center items-center h-screen w-screen'}>
      Something went wrong: {error.message}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default ErrorPage;
