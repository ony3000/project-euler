const { sum } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');
const { factorial } = require('../../lib/toolbox');

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
