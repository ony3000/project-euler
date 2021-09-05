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

    const reversedColumnIndexes = range(LAST_COLUMN_INDEX, FIRST_COLUMN_INDEX, -1, true).toArray();
    const rowIndexes = range(FIRST_ROW_INDEX, LAST_ROW_INDEX, true).toArray();

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
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
