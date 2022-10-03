import { useContext } from 'react';

import AuthenticationContext from '../contexts/authentication-context';

const useCurrentUser = () => {
  const currentUser = useContext(AuthenticationContext);

  return currentUser;
};

export default useCurrentUser;
