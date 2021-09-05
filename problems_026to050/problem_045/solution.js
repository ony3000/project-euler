const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const {
  nthTriangleNumber,
  nthPentagonalNumber,
  nthHexagonalNumber,
} = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const isTriangleNumber = (num) => {
      const guessedN = Math.floor(Math.sqrt(num * 2));

      return guessedN > 0 && num === nthTriangleNumber(guessedN);
    };

    const isPentagonalNumber = (num) => {
      const guessedN = Math.ceil(Math.sqrt((num * 2) / 3));

      return guessedN > 0 && num === nthPentagonalNumber(guessedN);
    };

    let num = 144;

    while (answer === null) {
      const newHexagonal = nthHexagonalNumber(num);

      if (isTriangleNumber(newHexagonal) && isPentagonalNumber(newHexagonal)) {
        answer = newHexagonal;
        break;
      }

      num += 1;
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
