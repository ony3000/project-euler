import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '@/lib/types';
import { range } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const source = fs.readFileSync(path.resolve(__dirname, 'matrix.txt'));
  const matrix: number[][] = source.toString().trim().split('\n').map((line) => JSON.parse(`[${line.trim()}]`));

  const MATRIX_SIZE = matrix.length;
  const pathSumMatrix: number[][] = Array(MATRIX_SIZE).fill(null).map(() => Array(MATRIX_SIZE).fill(0));

  const FIRST_ROW_INDEX = 0;
  const FIRST_COLUMN_INDEX = 0;
  const LAST_ROW_INDEX = MATRIX_SIZE - 1;
  const LAST_COLUMN_INDEX = MATRIX_SIZE - 1;
  const reversedColumnIndexes = range(LAST_COLUMN_INDEX, FIRST_COLUMN_INDEX - 1, -1);
  const rowIndexes = range(FIRST_ROW_INDEX, LAST_ROW_INDEX + 1);

  reversedColumnIndexes.forEach((columnIndex) => {
    if (columnIndex === LAST_COLUMN_INDEX) {
      rowIndexes.forEach((rowIndex) => {
        pathSumMatrix[rowIndex][columnIndex] = matrix[rowIndex][columnIndex];
      });
    }
    else {
      rowIndexes.forEach((rowIndex) => {
        // straight path sum
        pathSumMatrix[rowIndex][columnIndex] = matrix[rowIndex][columnIndex] + pathSumMatrix[rowIndex][columnIndex + 1];
      });

      let needOptimization = true;

      while (needOptimization) {
        needOptimization = false;

        rowIndexes.forEach((rowIndex) => {
          const nonStraightPathSum = matrix[rowIndex][columnIndex] + Math.min(
            (rowIndex === FIRST_ROW_INDEX ? Infinity : pathSumMatrix[rowIndex - 1][columnIndex]),
            (rowIndex === LAST_ROW_INDEX ? Infinity : pathSumMatrix[rowIndex + 1][columnIndex]),
          );

          if (pathSumMatrix[rowIndex][columnIndex] > nonStraightPathSum) {
            pathSumMatrix[rowIndex][columnIndex] = nonStraightPathSum;
            needOptimization = true;
          }
        });
      }
    }
  });

  answer = Math.min(
    ...pathSumMatrix.map((row) => row[0]).filter((value) => Number.isFinite(value)),
  );

  return answer;
};

export default solution;
