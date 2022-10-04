import { useState } from 'react';

import { fakeUser } from '../factories';
import type { IUser } from '../types';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(fakeUser());

  return [currentUser, setCurrentUser] as const;
};

export default useCurrentUser;
