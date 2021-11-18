const { sum } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');
const { factorial } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const lengthPerStarter = {};

    for (let num = 1; num < 1000000; num += 1) {
      let target = num;
      const chain = [];
      let lengthOfChain = null;

      while (!chain.includes(target)) {
        chain.push(target);
        target = sum(String(target).split('').map((digit) => Number(factorial(Number(digit)))));

        if (target in lengthPerStarter) {
          lengthOfChain = chain.length + lengthPerStarter[target];
          break;
        }
      }

      if (lengthOfChain === null) {
        lengthOfChain = chain.length;
      }

      lengthPerStarter[num] = lengthOfChain;

      if (lengthOfChain === 60) {
        answer += 1;
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
