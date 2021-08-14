const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (const num of range(10, 354295).valueOf()) {
      const sumOfPowers = sum(String(num).split('').map((digit) => Number(digit) ** 5));

      if (sumOfPowers === num) {
        answer += num;
      }
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
