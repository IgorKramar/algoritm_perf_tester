import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../../types.js';

const insertionSort: Algorithm<number[], number[]> = (numbers) => {
  const n = numbers.length;
  for (let i = 1; i < n; i++) {
    const key = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > key) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = key;
  }
  return numbers;
};

insertionSort.info = {
  name: 'Insertion Sort',
  description:
    'Insertion Sort builds the final sorted array one item at a time, inserting each new item into the appropriate position.',
  timeComplexity: Complexity.Quadratic,
  spaceComplexity: Complexity.Constant,
  inputType: InputDataType.NumberArray,
  outputType: OutputDataType.NumberArray
};

export default insertionSort;
