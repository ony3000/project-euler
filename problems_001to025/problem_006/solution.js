const Stopwatch = require('../../lib/Stopwatch');
const { naturalSum, squareSum } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = naturalSum(100) ** 2 - squareSum(100);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
