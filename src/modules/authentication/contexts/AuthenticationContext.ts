import React from 'react';

import type { IUser } from '../types';

interface IContext {
  currentUser: IUser | undefined;
  signOut: () => Promise<void>;
}

const AuthenticationContext = React.createContext<IContext | undefined>(
  undefined
);

export default AuthenticationContext;
