const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');

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

    const LAST_ROW_INDEX = MATRIX_SIZE - 1;
    const LAST_COLUMN_INDEX = MATRIX_SIZE - 1;

    const recursion = (rowIndex, columnIndex) => {
      if (pathSumMatrix[rowIndex][columnIndex] !== null) {
        return pathSumMatrix[rowIndex][columnIndex];
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
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
