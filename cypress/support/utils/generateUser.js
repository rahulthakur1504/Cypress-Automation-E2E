import { faker } from '@faker-js/faker';

export function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Date.now()}@yopmail.com`;
  const password = faker.internet.password(10, true, /[A-Z]/, "@");
  const phone = faker.phone.number('##########');

  return {
    firstName,
    lastName,
    email,
    password,
    phone
  };
}
