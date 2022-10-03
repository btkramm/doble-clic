import React from 'react';

import type { IUser } from '../types';

export interface IAuthenticationContext {
  currentUser?: IUser;
  signOut: () => Promise<void>;
  signIn: () => Promise<void>;
}

const AuthenticationContext = React.createContext<
  IAuthenticationContext | undefined
>(undefined);

export default AuthenticationContext;
