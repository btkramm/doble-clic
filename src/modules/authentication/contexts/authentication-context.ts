import React from 'react';

import type { IUser } from '../types';

export interface IAuthenticationContext {
  currentUser?: IUser;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthenticationContext = React.createContext<
  IAuthenticationContext | undefined
>(undefined);

export default AuthenticationContext;
