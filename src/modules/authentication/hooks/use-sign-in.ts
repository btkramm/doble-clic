import { useContext } from 'react';

import AuthenticationContext from '../contexts/authentication-context';

const useSignIn = () => {
  const context = useContext(AuthenticationContext);

  return context?.signIn;
};

export default useSignIn;
