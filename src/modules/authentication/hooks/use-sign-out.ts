import { useContext } from 'react';

import AuthenticationContext from '../contexts/AuthenticationContext';

const useSignOut = () => {
  const context = useContext(AuthenticationContext);

  return context?.signOut;
};

export default useSignOut;
