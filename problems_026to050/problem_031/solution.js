const Stopwatch = require('../../lib/Stopwatch');
const { numberOfPartitions } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = numberOfPartitions(200, [1, 2, 5, 10, 20, 50, 100, 200]);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
