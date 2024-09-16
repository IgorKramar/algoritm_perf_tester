import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../types.js';

const bubbleSort: Algorithm<number[], number[]> = (numbers) => {
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  return numbers;
};

bubbleSort.info = {
  name: 'Bubble Sort',
  description: 'Sorts numbers array with bubble sort algorithm.',
  timeComplexity: Complexity.Quadratic,
  spaceComplexity: Complexity.Constant,
  inputType: InputDataType.NumberArray,
  outputType: OutputDataType.NumberArray
};

export default bubbleSort;
