/**
 * Checks if the provided value is a primitive type (string, number, boolean, etc.).
 * @param value - The value to check.
 * @returns - True if the value is a primitive, otherwise false.
 */
export function isPrimitive(value: unknown): boolean {
  return value !== Object(value);
}

/**
 * Creates a deep copy of the test data to avoid modifying the original data in cache.
 * If the data is a primitive, it returns the data itself.
 * @param data - The data to be cloned.
 * @returns - A deep copy of the data if it's an object/array, or the primitive itself.
 */
export function cloneData<T>(data: T): T {
  // If the data is a primitive, return it as-is
  if (isPrimitive(data)) {
    return data;
  }

  // For objects and arrays, create a deep copy
  return JSON.parse(JSON.stringify(data));
}
