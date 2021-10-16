const rootPath = require('app-root-path');
const { sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { properDivisorSum } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const amicableNumbers = [];
    const divisorSumPerNumber = {
      0: 0,
    };

    for (let num = 1; num < 10000; num += 1) {
      const divisorSum = properDivisorSum(num);

      divisorSumPerNumber[num] = divisorSum;

      if (divisorSum < num && divisorSumPerNumber[divisorSum] === num) {
        amicableNumbers.push(num, divisorSum);
      }
    }

    answer = sum(amicableNumbers);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
