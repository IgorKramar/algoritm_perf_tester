import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { runPerformanceTest } from './utils/perfomanceTest.js';
import { generateTestData } from './utils/generateTestData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const algorithmsDir = path.join(__dirname, './algorithms');

  // Чтение всех файлов в папке /algorithms
  const files = await fs.readdir(algorithmsDir);

  for (const file of files) {
    if (file.endsWith('.ts') || file.endsWith('.js')) {
      // Проверяем, что файл является модулем
      const modulePath = `./algorithms/${file}`;
      const algorithmModule = await import(modulePath);
      const algorithm = algorithmModule.default;

      console.log(`\n--- Запуск тестов для алгоритма: ${file} ---`);

      // Генерация тестовых данных на основе inputType из info
      const testData = generateTestData(algorithm.info.inputType, 100);
      await runPerformanceTest(algorithm, testData);
    }
  }
}

main().catch((err) => console.error(err));
