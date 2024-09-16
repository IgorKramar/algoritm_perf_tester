import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../types.js';

// Algorithm that takes an array of numbers and returns the squared values
const squareNumbers: Algorithm<number[], number[]> = (numbers) => {
  return numbers.map((num) => num * num);
};

// Metadata about the algorithm
squareNumbers.info = {
  name: 'Square Numbers',
  description: 'Squares an array of numbers.',
  timeComplexity: Complexity.Linear, // O(n)
  spaceComplexity: Complexity.Linear, // O(n)
  inputType: InputDataType.NumberArray, // input is an array of numbers
  outputType: OutputDataType.NumberArray // output is an array of numbers
};

export default squareNumbers;
