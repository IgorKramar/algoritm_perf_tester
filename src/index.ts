import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { runPerformanceTest } from './utils/perfomanceTest.js';
import { generateTestData } from './utils/generateTestData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Loads algorithms dynamically from the 'algorithms' directory
 * and runs performance tests on them using generated test data.
 */
async function main() {
  const algorithmsDir = path.join(__dirname, './algorithms');

  const files = await fs.readdir(algorithmsDir);

  for (const file of files) {
    if (file.endsWith('.ts') || file.endsWith('.js')) {
      const modulePath = `./algorithms/${file}`;
      const algorithmModule = await import(modulePath);
      const algorithm = algorithmModule.default;

      console.log(`\n--- Запуск тестов для алгоритма: ${file} ---`);

      // Generate test data based on the algorithm's input type
      const testData = generateTestData(algorithm.info.inputType, 100);

      // Run performance test
      await runPerformanceTest(algorithm, testData);
    }
  }
}

main().catch((err) => console.error(err));
