# Algorithm Performance Tester

A TypeScript project designed to evaluate and compare the performance of different algorithms. This tool allows you to test algorithms with dynamically generated data, measure their execution time, and assess their ability to handle large volumes of data.

## Features

- Supports testing of various algorithms
- Measures algorithm performance based on execution time
- Handles large datasets efficiently
- Displays input/output data with a detailed console report

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/algorithm-performance-tester.git
    ```

2. Navigate to the project directory:
    ```bash
    cd algorithm-performance-tester
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To run the performance tests on algorithms, use the following command:

```bash
npm start
```

The tool will dynamically load the algorithms from the `/algorithms` folder, generate test data, and display the performance results in the console.

## Adding New Algorithms

To add a new algorithm for testing, follow these steps:

1. Create a new TypeScript file in the `src/algorithms` directory. Example: `exampleAlgorithm.ts`.

2. Export the algorithm as the default function and provide metadata for performance testing:

    ```typescript
    import { Algorithm } from '../types.js';

    // Algorithm that takes an array of user objects and returns an array of user names
    const processUsers: Algorithm<
      { id: string; name: string; email: string }[],
      string[]
    > = (users) => {
      return users.map((user) => user.name);
    };

    // Adding metadata
    processUsers.info = {
      name: 'User Processing',
      description: 'Processes an array of users and returns their names.',
      timeComplexity: 'O(n)', // Time complexity: iterating through the array
      spaceComplexity: 'O(n)', // Space complexity: creating a new array of names
      inputType: 'object[]', // Input data type
      outputType: 'string[]' // Output data type
    };

    export default processUsers;

    ```

3. The new algorithm will automatically be included in the performance tests.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.