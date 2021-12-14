import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const source = fs.readFileSync(path.resolve(__dirname, 'matrix.txt'));
  const matrix: number[][] = source.toString().trim().split('\n').map((line) => JSON.parse(`[${line.trim()}]`));

  const MATRIX_SIZE = matrix.length;
  const pathSumMatrix: (number | null)[][] = Array(MATRIX_SIZE).fill(null).map(() => Array(MATRIX_SIZE).fill(null));

  const LAST_ROW_INDEX = MATRIX_SIZE - 1;
  const LAST_COLUMN_INDEX = MATRIX_SIZE - 1;

  const recursion = (rowIndex: number, columnIndex: number): number => {
    const storedPathSum = pathSumMatrix[rowIndex][columnIndex];

    if (storedPathSum !== null) {
      return storedPathSum;
    }

    let minimalPathSum = matrix[rowIndex][columnIndex];

    if (rowIndex < LAST_ROW_INDEX || columnIndex < LAST_COLUMN_INDEX) {
      let rightPathSum = Infinity;
      let downPathSum = Infinity;

      if (columnIndex < LAST_COLUMN_INDEX) {
        rightPathSum = recursion(rowIndex, columnIndex + 1);
      }

      if (rowIndex < LAST_ROW_INDEX) {
        downPathSum = recursion(rowIndex + 1, columnIndex);
      }

      minimalPathSum += Math.min(rightPathSum, downPathSum);
    }

    pathSumMatrix[rowIndex][columnIndex] = minimalPathSum;

    return minimalPathSum;
  };

  answer = recursion(0, 0);

  return answer;
};

export default solution;
