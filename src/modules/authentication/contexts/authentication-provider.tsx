import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import { fakeUser } from '../factories';
import type { IUser } from '../types';
import AuthenticationContext from './authentication-context';

function AuthenticationProvider({ children }: PropsWithChildren): JSX.Element {
  const [currentUser] = useState<IUser | undefined>(fakeUser());

  return (
    <AuthenticationContext.Provider value={currentUser}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
