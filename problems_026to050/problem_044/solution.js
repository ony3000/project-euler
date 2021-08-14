const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { nthPentagonalNumber } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const pentagonalNumbers = [];

    const isPentagonalNumber = (num) => {
      const guessedN = Math.ceil(Math.sqrt(num * 2 / 3));

      return guessedN > 0 && num === nthPentagonalNumber(guessedN);
    };

    let num = 1;

    while (answer === null) {
      const newPentagonal = nthPentagonalNumber(num);

      pentagonalNumbers.push(newPentagonal);

      for (const existingPentagonal of pentagonalNumbers) {
        const pentagonalSum = existingPentagonal + newPentagonal;
        const pentagonalDiff = Math.abs(existingPentagonal - newPentagonal);

        if (isPentagonalNumber(pentagonalSum) && isPentagonalNumber(pentagonalDiff)) {
          answer = pentagonalDiff;
          break;
        }
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
