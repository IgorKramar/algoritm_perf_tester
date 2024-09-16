# Algorithm Performance Tester

The **Algorithm Performance Tester** is a TypeScript-based tool designed to evaluate and compare the performance of different algorithms. It generates test data dynamically, measures the execution time, and assesses the ability of algorithms to handle large datasets. This project supports adding custom algorithms, measuring their time and space complexity, and generating detailed reports on performance.

## Features

- **Supports Various Algorithms**: Easily add algorithms and run performance tests on them.
- **Time and Space Complexity Analysis**: Automatically calculates and displays time and space complexities.
- **Dynamic Test Data Generation**: Generates input data for algorithms dynamically, including various data types.
- **Console Report**: Detailed reports in the console, including input/output samples and performance metrics.
- **Extensible**: Easily add new algorithms by following the provided template.

## Installation

To get started, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/algorithm-performance-tester.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd algorithm-performance-tester
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

To run the performance tests on the existing algorithms:

```bash
npm start
```

The tool will:
1. Dynamically load all the algorithms located in the `/src/algorithms` directory.
2. Generate test data based on the algorithm's specified input type.
3. Measure the execution time and output the performance results.

### Example Output

When running the tests, you'll see output like this:

```plaintext
--- Running tests for algorithm: exampleAlgorithm.ts ---

Algorithm: User Processing

  Description: Processes an array of users and returns their names.

  Time Complexity: O(n)
  Space Complexity: O(n)

  Input Type: object[]
  Output Type: string[]

  Input Data (first 3 elements):
  [
    {
      "id": "7f9c21bc-5c44-45fd-a9b5-8b8f9b9168d4",
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "id": "7d0f34d1-f1d3-4521-b47c-6e1c53dfecec",
      "name": "Jane Doe",
      "email": "janedoe@example.com"
    },
    ...
  ]

Execution Time: 15ms

  Result (first 3 elements):
  [
    "John Doe",
    "Jane Doe",
    ...
  ]
```

## Adding New Algorithms

To add a new algorithm for testing, follow these steps:

1. **Create a new TypeScript file** in the `src/algorithms` directory. Example: `myAlgorithm.ts`.

2. **Define the algorithm** and its metadata using the `Algorithm` type from `src/types.ts`. Here's an example:

    ```typescript
    import { Algorithm, Complexity, InputDataType, OutputDataType } from '../types.js';

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
    ```

3. **Run the tests**: Once the new algorithm is added, simply run `npm start` to test its performance.

### Supported Data Types

The test data generator (`generateTestData.ts`) supports the following data types:
- `NumberArray`: Array of numbers.
- `StringArray`: Array of strings.
- `BooleanArray`: Array of boolean values.
- `DateArray`: Array of dates.
- `ObjectArray`: Array of objects with properties like `id`, `name`, and `email`.

You can easily extend these data types by updating the `InputDataType` enum in `types.ts`.

### Complexity Definitions

For each algorithm, you need to specify its **time** and **space complexity** using the `Complexity` enum. Here are some available values:
- **Constant Time**: `O(1)`
- **Logarithmic Time**: `O(log n)`
- **Linear Time**: `O(n)`
- **Quadratic Time**: `O(n^2)`
- **Cubic Time**: `O(n^3)`
- **Exponential Time**: `O(2^n)`
- **Other specific complexities**: `O(V + E)` for graph algorithms, `O(log n)` for tree operations, etc.

## Project Structure

The project structure is organized as follows:

```plaintext
├── src/
│   ├── algorithms/            # Directory where all algorithms are defined
│   ├── utils/
│   │   ├── generateTestData.ts # Module for generating test data for algorithms
│   │   └── perfomanceTest.ts   # Module for running and logging performance tests
│   ├── types.ts                # Definitions for Algorithm type, InputDataType, Complexity, etc.
│   └── index.ts                # Main entry point that dynamically loads algorithms and runs tests
├── .gitignore                  # Ignore unnecessary files for git
├── package.json                # Project metadata and dependencies
├── README.md                   # This file
├── LICENSE.md                  # Project license
└── tsconfig.json               # TypeScript configuration
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.