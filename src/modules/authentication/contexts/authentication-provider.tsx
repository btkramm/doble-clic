import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import type { IUser } from '../types';
import AuthenticationContext from './authentication-context';

function AuthenticationProvider({ children }: PropsWithChildren): JSX.Element {
  const [currentUser] = useState<IUser | undefined>(undefined);

  return (
    <AuthenticationContext.Provider value={currentUser}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
