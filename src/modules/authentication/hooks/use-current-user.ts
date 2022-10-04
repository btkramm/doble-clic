import { useContext } from 'react';

import AuthenticationContext from '../contexts/AuthenticationContext';

const useCurrentUser = () => {
  const context = useContext(AuthenticationContext);

  return context?.currentUser;
};

export default useCurrentUser;
