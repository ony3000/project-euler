const rootPath = require('app-root-path');
const { sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = sum(String(factorial(100)).split('').map((digit) => Number(digit)));

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
