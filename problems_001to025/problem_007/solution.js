const rootPath = require('app-root-path');
const { isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let count = 1;
    let num = 3;

    while (true) {
      if (isPrime(num)) {
        count += 1;

        if (count === 10001) {
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
