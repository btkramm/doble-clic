import { useEffect } from 'react';

import client from '../../api/utils';
import useSignOut from '../hooks/use-sign-out';

const isUnauthenticatedError = (error: any) => error.response.status === 404;

function UnuthenticationGuard({ children }: { children: JSX.Element }) {
  const signOut = useSignOut();

  useEffect(() => {
    const interceptor = client.interceptors.response.use(
      (_) => _,
      (error) => {
        if (isUnauthenticatedError(error)) {
          signOut?.call(signOut);
        }

        return error;
      }
    );

    return () => {
      client.interceptors.response.eject(interceptor);
    };
  }, []);

  return children;
}

export default UnuthenticationGuard;
