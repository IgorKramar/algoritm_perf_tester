import { generateTestData } from './generateTestData.js';
import { cloneData } from './common.js';
import { runPerformanceTest } from './perfomanceTest.js';
import { AlgorithmTree, InputDataType } from '../types.js';
import { InputType } from './typeMappers.js';

/**
 * Recursively runs performance tests for all algorithms in the loaded algorithms tree.
 * @param {AlgorithmTree} algorithmsTree - The tree structure of loaded algorithms.
 * @param {Map<string, InputType<InputDataType>>} cache - A cache for storing generated test data.
 * @param {string} folderName - The name of the current folder being processed.
 */
export async function runTestsForAlgorithms(
  algorithmsTree: AlgorithmTree,
  cache: Map<string, InputType<InputDataType>>,
  folderName = ''
) {
  if (folderName) {
    console.log(`\n=== Testing algorithms in folder: ${folderName} ===\n`);
  }

  for (const key in algorithmsTree) {
    const item = algorithmsTree[key];

    if (typeof item === 'object' && !item.info) {
      // If it's a folder, display the folder name and recurse
      await runTestsForAlgorithms(item, cache, key);
    } else if (typeof item === 'function') {
      // It's an algorithm, run the tests
      const algorithm = item;

      console.log(`\n--- Running tests for algorithm: ${key} ---\n`);

      const inputType: InputDataType = algorithm.info.inputType;
      const inputTypeString = String(inputType);

      // Check cache for test data
      const isCached = cache.has(inputTypeString);

      // Get test data from cache or generate new data
      const testData = isCached
        ? cache.get(inputTypeString)
        : generateTestData<InputType<InputDataType>>(inputType, 1000);

      if (!isCached) {
        cache.set(inputTypeString, testData);
      }

      // Clone data before running the test
      const clonedTestData = cloneData(testData);

      // Run the performance test
      await runPerformanceTest(algorithm, clonedTestData);
    }
  }
}
