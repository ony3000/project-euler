const Stopwatch = require('../../lib/Stopwatch');
const { naturalSum } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    answer += 3 * naturalSum(Math.floor(999 / 3));
    answer += 5 * naturalSum(Math.floor(999 / 5));
    answer -= 15 * naturalSum(Math.floor(999 / 15));

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
