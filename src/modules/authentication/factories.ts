import { faker } from '@faker-js/faker';

export const fakeUser = () => ({
  id: faker.datatype.uuid(),
});
