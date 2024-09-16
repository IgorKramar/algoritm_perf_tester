import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../../types.js';

const heapSort: Algorithm<number[], number[]> = (numbers) => {
  const n = numbers.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(numbers, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [numbers[0], numbers[i]] = [numbers[i], numbers[0]];
    heapify(numbers, i, 0);
  }

  return numbers;
};

function heapify(arr: number[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

heapSort.info = {
  name: 'Heap Sort',
  description:
    'Heap Sort builds a binary heap from the array and then repeatedly extracts the maximum element, rebuilding the heap each time.',
  timeComplexity: Complexity.Logarithmic,
  spaceComplexity: Complexity.Constant,
  inputType: InputDataType.NumberArray,
  outputType: OutputDataType.NumberArray
};

export default heapSort;
