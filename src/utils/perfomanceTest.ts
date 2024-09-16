import chalk from 'chalk';
import { Algorithm } from '../types.js';

/**
 * Runs a performance test on the given algorithm using the provided test data.
 * Logs the algorithm details, input, output, and execution time.
 *
 * @template I - The type of input data.
 * @template O - The type of output data.
 * @param {Algorithm<I, O>} algorithm - The algorithm to be tested.
 * @param {I} testData - The input data for the algorithm.
 * @returns {Promise<void>} - A promise that resolves when the test is complete.
 */
export async function runPerformanceTest<I, O>(
  algorithm: Algorithm<I, O>,
  testData: I
) {
  const {
    name,
    description,
    timeComplexity,
    spaceComplexity,
    inputType,
    outputType,
    sorted
  } = algorithm.info;

  let currentTestData = testData;

  // Display algorithm information with colors and indentation
  console.log(chalk.blue.bold(`\nAlgorithm: ${name}`));
  console.log(chalk.green(`  Description: ${description}`));
  console.log(chalk.yellow(`  Time Complexity: ${timeComplexity}`));
  console.log(chalk.yellow(`  Space Complexity: ${spaceComplexity}`));
  console.log(chalk.cyan(`  Input Type: ${inputType}`));
  console.log(chalk.cyan(`  Output Type: ${outputType}`));

  // Display input data (only first 3 elements)
  if (Array.isArray(testData)) {
    if (sorted) {
      currentTestData = testData.sort();
    }
    const displayData = testData.slice(0, 3);
    console.log(chalk.magenta(`  Input Data (first 3 elements):`));
    console.log(`${JSON.stringify(displayData, null, 2)}...\n`);
  } else {
    console.log(
      chalk.magenta(`Input Data: ${JSON.stringify(currentTestData, null, 2)}\n`)
    );
  }

  console.time(chalk.red(`  Execution Time: `));
  const result = algorithm(currentTestData);
  console.timeEnd(chalk.red(`  Execution Time: `));
  console.log('\n');

  // Display result (only first 3 elements if it's an array)
  if (Array.isArray(result)) {
    const displayResult = result.slice(0, 3);
    console.log(chalk.magenta(`  Output (first 3 elements):`));
    console.log(`${JSON.stringify(displayResult, null, 2)}...\n`);
  } else {
    console.log(chalk.magenta(`Output: ${JSON.stringify(result, null, 2)}\n`));
  }

  console.log(
    chalk.gray('------------------------------------------------------------\n')
  );
}
