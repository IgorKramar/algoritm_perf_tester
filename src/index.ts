import { fileURLToPath } from 'url';
import path from 'path';
import { getAllAlgorithmFiles } from './utils/algorithmLoader.js'; // Importing the function to load algorithms
import { runTestsForAlgorithms } from './utils/testRunner.js'; // Importing the test runner function
import { InputType } from './utils/typeMappers.js';
import { InputDataType } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Main entry point. Loads algorithms as a tree and runs performance tests.
 */
async function main() {
  const algorithmsDir = path.join(__dirname, './algorithms');

  // Load the tree structure of all algorithms
  const algorithmsTree = await getAllAlgorithmFiles(
    algorithmsDir,
    algorithmsDir
  );

  // Create a cache for test data
  const cache = new Map<string, InputType<InputDataType>>();

  // Run tests for all algorithms in the tree
  await runTestsForAlgorithms(algorithmsTree, cache);
}

main().catch((err) => console.error(err));
