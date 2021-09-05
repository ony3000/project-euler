const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const criterion = 2000000;
    let sizeLimit = null;
    let minDifference = null;

    const calculateInnerRectangle = (outerRowSize, outerColumnSize) => {
      let result = 0;

      for (let innerRowSize = 1; innerRowSize <= outerRowSize; innerRowSize += 1) {
        for (let innerColumnSize = 1; innerColumnSize <= outerColumnSize; innerColumnSize += 1) {
          result += (outerRowSize - innerRowSize + 1) * (outerColumnSize - innerColumnSize + 1);
        }
      }

      return result;
    };

    for (let rowSize = 1; sizeLimit === null || rowSize <= sizeLimit; rowSize += 1) {
      for (let columnSize = 1; sizeLimit === null || columnSize <= sizeLimit; columnSize += 1) {
        const numberOfRectangles = calculateInnerRectangle(rowSize, columnSize);
        const difference = Math.abs(numberOfRectangles - criterion);

        if (minDifference === null || minDifference > difference) {
          minDifference = difference;
          answer = rowSize * columnSize;
        }

        if (numberOfRectangles > criterion) {
          if (sizeLimit === null) {
            sizeLimit = columnSize;
          }

          break;
        }
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
