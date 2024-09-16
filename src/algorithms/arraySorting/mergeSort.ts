import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../../types.js';

const mergeSort: Algorithm<number[], number[]> = (numbers) => {
  if (numbers.length <= 1) {
    return numbers;
  }

  const mid = Math.floor(numbers.length / 2);
  const left = mergeSort(numbers.slice(0, mid));
  const right = mergeSort(numbers.slice(mid));

  return merge(left, right);
};

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

mergeSort.info = {
  name: 'Merge Sort',
  description:
    'Merge Sort uses the "divide and conquer" strategy by dividing the array into subarrays, sorting them, and then merging them back together.',
  timeComplexity: Complexity.Logarithmic,
  spaceComplexity: Complexity.Linear,
  inputType: InputDataType.NumberArray,
  outputType: OutputDataType.NumberArray
};

export default mergeSort;
