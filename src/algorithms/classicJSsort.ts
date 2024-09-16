import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../types.js';

const classicJSSort: Algorithm<number[], number[]> = (numbers) => {
  return numbers.sort();
};

classicJSSort.info = {
  name: 'Classic JS sort function',
  description: 'Sorts numbers array with js sort function.',
  timeComplexity: Complexity.Quadratic,
  spaceComplexity: Complexity.Constant,
  inputType: InputDataType.NumberArray,
  outputType: OutputDataType.NumberArray
};

export default classicJSSort;
