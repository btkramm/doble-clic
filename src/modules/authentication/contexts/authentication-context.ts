import React from 'react';

import type { IUser } from '../types';

const AuthenticationContext = React.createContext<IUser | undefined>(undefined);

export default AuthenticationContext;
