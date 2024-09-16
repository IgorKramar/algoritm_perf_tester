import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { runPerformanceTest } from './utils/perfomanceTest.js';
import { generateTestData } from './utils/generateTestData.js';
import { cloneData } from './utils/common.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Loads algorithms dynamically from the 'algorithms' directory
 * and runs performance tests on them using generated test data.
 */
async function main() {
  const algorithmsDir = path.join(__dirname, './algorithms');

  const files = await fs.readdir(algorithmsDir);
  const cache = new Map();

  for (const file of files) {
    if (file.endsWith('.ts') || file.endsWith('.js')) {
      const modulePath = `./algorithms/${file}`;
      const algorithmModule = await import(modulePath);
      const algorithm = algorithmModule.default;

      console.log(`\n--- Running tests for algorithm: ${file} ---\n`);

      // Ensure inputType is a string
      const inputType = String(algorithm.info.inputType);

      // Check if the test data is already cached
      const isCached = cache.has(inputType);

      // Get the test data from the cache or generate new data
      const testData = isCached
        ? cache.get(inputType)
        : generateTestData(algorithm.info.inputType, 100);

      if (!isCached) {
        // Cache the generated test data
        cache.set(inputType, testData);
      }

      // Clone the data if it's an object or array, otherwise pass it as-is
      const clonedTestData = cloneData(testData);

      // Run performance test using the cloned or cached test data
      await runPerformanceTest(algorithm, clonedTestData);
    }
  }
}

main().catch((err) => console.error(err));
