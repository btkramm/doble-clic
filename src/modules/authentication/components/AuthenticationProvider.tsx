import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import AuthenticationContext from '../contexts/AuthenticationContext';
import type { IUser } from '../types';

function AuthenticationProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  const context = {
    currentUser,
    signOut: async () => {
      setCurrentUser(undefined);
    },
  };

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
