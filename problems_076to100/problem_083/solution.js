const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const source = fs.readFileSync(path.resolve(__dirname, 'matrix.txt'));
    const matrix = source.toString().trim().split('\n');

    matrix.forEach((line, index) => {
      matrix[index] = line.trim().split(',').map((value) => Number(value));
    });

    const MATRIX_SIZE = matrix.length;

    const pathSumMatrix = Array(MATRIX_SIZE).fill(null).map(() => Array(MATRIX_SIZE).fill(null));

    const FIRST_ROW_INDEX = 0;
    const FIRST_COLUMN_INDEX = 0;
    const LAST_ROW_INDEX = MATRIX_SIZE - 1;
    const LAST_COLUMN_INDEX = MATRIX_SIZE - 1;

    // from 0 to (ROW_SIZE - 1 + COLUMN_SIZE - 1) (inclusive)
    const diagonalIndexes = range(0, LAST_ROW_INDEX + LAST_COLUMN_INDEX, true).toArray();

    diagonalIndexes.forEach((diagonalIndex) => {
      if (diagonalIndex === 0) {
        pathSumMatrix[FIRST_ROW_INDEX][FIRST_COLUMN_INDEX] = matrix[FIRST_ROW_INDEX][FIRST_COLUMN_INDEX];
      }
      else {
        for (let rowIndex = FIRST_ROW_INDEX; rowIndex <= diagonalIndex; rowIndex += 1) {
          const columnIndex = diagonalIndex - rowIndex;

          if (rowIndex > LAST_ROW_INDEX || columnIndex > LAST_COLUMN_INDEX) {
            continue;
          }

          pathSumMatrix[rowIndex][columnIndex] = matrix[rowIndex][columnIndex] + Math.min(
            (rowIndex === FIRST_ROW_INDEX ? Infinity : pathSumMatrix[rowIndex - 1][columnIndex]),
            (columnIndex === FIRST_COLUMN_INDEX ? Infinity : pathSumMatrix[rowIndex][columnIndex - 1]),
          );
        }
      }
    });

    let needOptimization = true;

    while (needOptimization) {
      needOptimization = false;

      diagonalIndexes.forEach((diagonalIndex) => {
        if (diagonalIndex === 0) {
          return;
        }

        for (let rowIndex = FIRST_ROW_INDEX; rowIndex <= diagonalIndex; rowIndex += 1) {
          const columnIndex = diagonalIndex - rowIndex;

          if (rowIndex > LAST_ROW_INDEX || columnIndex > LAST_COLUMN_INDEX) {
            continue;
          }

          const optimizedPathSum = matrix[rowIndex][columnIndex] + Math.min(
            (rowIndex === FIRST_ROW_INDEX ? Infinity : pathSumMatrix[rowIndex - 1][columnIndex]),
            (rowIndex === LAST_ROW_INDEX ? Infinity : pathSumMatrix[rowIndex + 1][columnIndex]),
            (columnIndex === FIRST_COLUMN_INDEX ? Infinity : pathSumMatrix[rowIndex][columnIndex - 1]),
            (columnIndex === LAST_COLUMN_INDEX ? Infinity : pathSumMatrix[rowIndex][columnIndex + 1]),
          );

          if (pathSumMatrix[rowIndex][columnIndex] > optimizedPathSum) {
            pathSumMatrix[rowIndex][columnIndex] = optimizedPathSum;
            needOptimization = true;
          }
        }
      });
    }

    answer = pathSumMatrix[LAST_ROW_INDEX][LAST_COLUMN_INDEX];

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
