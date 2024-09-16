import path from 'path';
import { promises as fs } from 'fs';
import {
  Algorithm,
  AlgorithmTree,
  InputDataType,
  OutputDataType
} from '../types.js';
import { InputType, OutputType } from './typeMappers.js';

/**
 * Recursively fetch all JavaScript/TypeScript files from the given directory
 * and build a nested object representing the folder structure.
 * @param {string} dir - The root directory.
 * @param {string} baseDir - The base directory to maintain relative paths.
 * @returns {Promise<AlgorithmTree>} - A nested object of algorithms.
 */
export async function getAllAlgorithmFiles(
  dir: string,
  baseDir: string
): Promise<AlgorithmTree> {
  const files = await fs.readdir(dir, { withFileTypes: true });
  const algorithms: AlgorithmTree = {};

  for (const file of files) {
    const filePath = path.join(dir, file.name);
    const relativePath = path.relative(baseDir, filePath);
    const keyPath = relativePath.split(path.sep);

    if (file.isDirectory()) {
      algorithms[file.name] = await getAllAlgorithmFiles(filePath, baseDir);
    } else if (file.name.endsWith('.js') || file.name.endsWith('.ts')) {
      const algorithmModule = await import(filePath);
      const algorithmName = path.basename(file.name, path.extname(file.name));

      const algorithm = algorithmModule.default as Algorithm<
        InputType<typeof algorithm.info.inputType>,
        OutputType<typeof algorithm.info.outputType>
      >;

      setObjectAtPath(
        algorithms,
        keyPath.slice(0, -1),
        algorithmName,
        algorithm
      );
    }
  }

  return algorithms;
}

/**
 * Helper function to set value in a nested object structure.
 * @param {AlgorithmTree} obj - The object to modify.
 * @param {string[]} pathArray - Array of keys representing the path.
 * @param {string} key - The key where the value should be set.
 * @param {Algorithm<any, any>} value - The algorithm to set.
 */
function setObjectAtPath<
  I extends InputType<InputDataType>,
  O extends OutputType<OutputDataType>
>(
  obj: AlgorithmTree,
  pathArray: string[],
  key: string,
  value: Algorithm<I, O>
) {
  let current = obj;
  for (const part of pathArray) {
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part] as AlgorithmTree;
  }
  current[key] = value;
}
