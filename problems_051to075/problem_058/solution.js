const rootPath = require('app-root-path');
const { range, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let numberCount = 1;
    let primeCount = 0;
    let distanceFromOrigin = 0;

    while (answer === null) {
      distanceFromOrigin += 1;

      const currentSquareLength = 2 * distanceFromOrigin + 1;
      const innerSquareLength = currentSquareLength - 2;

      const diagonalGap = currentSquareLength - 1;
      const minDiagonal = innerSquareLength ** 2 + diagonalGap;
      const maxDiagonal = currentSquareLength ** 2;

      numberCount += 4;

      for (const num of range(minDiagonal, maxDiagonal, diagonalGap, true).toArray()) {
        if (isPrime(num)) {
          primeCount += 1;
        }
      }

      if (primeCount / numberCount < 0.1) {
        answer = currentSquareLength;
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
