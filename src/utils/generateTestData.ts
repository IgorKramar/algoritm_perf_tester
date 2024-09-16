import { faker } from '@faker-js/faker';

// Генерация тестовых данных в зависимости от типа
export function generateTestData<T>(type: string, size: number): T {
  switch (type) {
    case 'number[]':
      return Array.from({ length: size }, () =>
        faker.number.int()
      ) as unknown as T;
    case 'string':
      return faker.lorem.words(size) as unknown as T;
    case 'object[]':
      return Array.from({ length: size }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email()
      })) as unknown as T;
    default:
      throw new Error(`Unsupported test data type: ${type}`);
  }
}
