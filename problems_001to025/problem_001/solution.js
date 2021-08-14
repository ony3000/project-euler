const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { naturalSum } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = 3 * naturalSum(Math.floor(999 / 3)) + 5 * naturalSum(Math.floor(999 / 5)) - 15 * naturalSum(Math.floor(999 / 15));

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
