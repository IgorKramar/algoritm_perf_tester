import { faker } from '@faker-js/faker';
import { InputDataType } from '../types.js';

/**
 * Generates test data based on the specified input data type and size.
 *
 * @template T - The type of data to generate.
 * @param {InputDataType} type - The type of data to generate (e.g., number[], object[]).
 * @param {number} size - The size of the data to generate.
 * @returns {T} - The generated test data.
 * @throws Will throw an error if the data type is not supported.
 */
export function generateTestData<T>(type: InputDataType, size: number): T {
  switch (type) {
    case InputDataType.NumberArray:
      return Array.from({ length: size }, () =>
        faker.number.int()
      ) as unknown as T;

    case InputDataType.StringArray:
      return Array.from({ length: size }, () =>
        faker.lorem.word()
      ) as unknown as T;

    case InputDataType.BooleanArray:
      return Array.from({ length: size }, () =>
        faker.datatype.boolean()
      ) as unknown as T;

    case InputDataType.DateArray:
      return Array.from({ length: size }, () =>
        faker.date.past()
      ) as unknown as T;

    case InputDataType.ObjectArray:
      return Array.from({ length: size }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        createdAt: faker.date.past()
      })) as unknown as T;

    case InputDataType.String:
      return faker.lorem.words(size) as unknown as T;

    case InputDataType.Number:
      return faker.number.int() as unknown as T;

    case InputDataType.Boolean:
      return faker.datatype.boolean() as unknown as T;

    case InputDataType.Date:
      return faker.date.past() as unknown as T;

    default:
      throw new Error(`Unsupported test data type: ${type}`);
  }
}
