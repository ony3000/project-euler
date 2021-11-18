const Stopwatch = require('../../lib/Stopwatch');
const { factorial } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = Number(factorial(40) / (factorial(20) * factorial(20)));

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
