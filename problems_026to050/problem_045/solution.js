const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const nthTriangleNumber = (n) => (n * (n + 1) / 2);

    const nthPentagonalNumber = (n) => (n * (3 * n - 1) / 2);

    const nthHexagonalNumber = (n) => (n * (2 * n - 1));

    const isTriangleNumber = (num) => {
      const guessedN = Math.floor(Math.sqrt(num * 2));

      return guessedN > 0 && num === nthTriangleNumber(guessedN);
    };

    const isPentagonalNumber = (num) => {
      const guessedN = Math.ceil(Math.sqrt(num * 2 / 3));

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

  console.log(result);
})();
