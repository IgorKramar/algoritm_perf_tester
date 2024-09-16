import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../../types.js';

const selectionSort: Algorithm<number[], number[]> = (numbers) => {
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
  }
  return numbers;
};

selectionSort.info = {
  name: 'Selection Sort',
  description:
    'Selection Sort divides the array into a sorted and unsorted region and iteratively selects the minimum element from the unsorted region, moving it to the end of the sorted region.',
  timeComplexity: Complexity.Quadratic,
  spaceComplexity: Complexity.Constant,
  inputType: InputDataType.NumberArray,
  outputType: OutputDataType.NumberArray
};

export default selectionSort;
