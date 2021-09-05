const rootPath = require('app-root-path');
const { isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 2;

    let num = 3;

    while (num < 2000000) {
      if (isPrime(num)) {
        answer += num;
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
