const rootPath = require('app-root-path');
const { sum } = require('mathjs/number');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = sum(String(2n ** 1000n).split('').map((digit) => Number(digit)));

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
