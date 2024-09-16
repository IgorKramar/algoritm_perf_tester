import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../../types.js';

const quickSort: Algorithm<number[], number[]> = (numbers) => {
  if (numbers.length <= 1) {
    return numbers;
  }

  const pivot = numbers[numbers.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

quickSort.info = {
  name: 'Quick Sort',
  description:
    'Quick Sort selects a "pivot" element and partitions the array into subarrays of elements less than and greater than the pivot, then recursively sorts the subarrays.',
  timeComplexity: Complexity.Linearithmic,
  spaceComplexity: Complexity.Logarithmic,
  inputType: InputDataType.NumberArray,
  outputType: OutputDataType.NumberArray
};

export default quickSort;
