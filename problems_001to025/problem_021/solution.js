const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { positiveDivisors } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const amicableNumbers = [];
    const divisorSumPerNumber = {
      0: 0,
    };

    for (const num of range(1, 10000).valueOf()) {
      const properDivisors = positiveDivisors(num).slice(0, -1);
      const divisorSum = sum(properDivisors);

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

  console.log(result);
})();
