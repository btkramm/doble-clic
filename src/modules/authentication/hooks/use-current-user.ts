import { faker } from '@faker-js/faker';

const useCurrentUser = () => {
  return {
    id: faker.datatype.uuid(),
  };
};

export default useCurrentUser;
