import { useEffect } from 'react';

import client from '../../api/utils';
import useSignOut from '../hooks/use-sign-out';

function UnuthenticationGuard({ children }: { children: JSX.Element }) {
  const signOut = useSignOut();

  useEffect(() => {
    const interceptor = client.interceptors.response.use(
      (_) => _,
      (error) => {
        if (error.response.status === 404) {
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
