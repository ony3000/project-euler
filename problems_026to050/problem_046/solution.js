const rootPath = require('app-root-path');
const { range, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let num = 9;

    while (answer === null) {
      if (!isPrime(num)) {
        let isWritableAsSum = false;
        const baseLimit = Math.floor(Math.sqrt((num - 3) / 2));

        for (const squareBase of range(1, baseLimit + 1).valueOf()) {
          if (isPrime(num - 2 * squareBase ** 2)) {
            isWritableAsSum = true;
            break;
          }
        }

        if (!isWritableAsSum) {
          answer = num;
          break;
        }
      }

      num += 2;
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
