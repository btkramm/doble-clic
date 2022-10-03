import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import { fakeUser } from '../factories';
import type { IUser } from '../types';
import AuthenticationContext from './authentication-context';

function AuthenticationProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(fakeUser());

  return (
    <AuthenticationContext.Provider
      value={{
        currentUser,
        signIn: async () => setCurrentUser(fakeUser()),
        signOut: async () => setCurrentUser(undefined),
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
