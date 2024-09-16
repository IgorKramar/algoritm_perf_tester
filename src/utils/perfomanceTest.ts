import chalk from 'chalk';
import { Algorithm } from '../types.js';

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

  // Выводим информацию об алгоритме с цветами и отступами
  console.log(chalk.blue.bold(`\nАлгоритм: ${name}\n`)); // Отступ после названия алгоритма
  console.log(chalk.green(`  Описание: ${description}\n`)); // Отступ после описания
  console.log(chalk.yellow(`  Временная сложность: ${timeComplexity}`));
  console.log(
    chalk.yellow(`  Пространственная сложность: ${spaceComplexity}\n`)
  ); // Отступ после сложностей
  console.log(chalk.cyan(`  Тип входных данных: ${inputType}`));
  console.log(chalk.cyan(`  Тип выходных данных: ${outputType}\n`)); // Отступ после типов данных

  // Выводим входные данные (только первые 3 элемента)
  if (Array.isArray(testData)) {
    if (sorted) {
      currentTestData = testData.sort();
    }
    const displayData = testData.slice(0, 3);
    console.log(chalk.magenta(`  Входные данные (первые 3 элемента):`));
    console.log(`${JSON.stringify(displayData, null, 2)}...\n`); // С отступами и новой строкой
  } else {
    console.log(
      chalk.magenta(
        `Входные данные: ${JSON.stringify(currentTestData, null, 2)}\n`
      )
    );
  }

  console.time(chalk.red(`  Время выполнения`));
  const result = algorithm(currentTestData);
  console.timeEnd(chalk.red(`  Время выполнения`));
  console.log('\n'); // Отступ после времени выполнения

  // Выводим результат (только первые 3 элемента)
  if (Array.isArray(result)) {
    const displayResult = result.slice(0, 3);
    console.log(chalk.magenta(`  Результат (первые 3 элемента):`));
    console.log(`${JSON.stringify(displayResult, null, 2)}...\n`); // С отступами и новой строкой
  } else {
    console.log(
      chalk.magenta(`Результат: ${JSON.stringify(result, null, 2)}\n`)
    );
  }

  console.log(
    chalk.gray('------------------------------------------------------------\n')
  );
}
