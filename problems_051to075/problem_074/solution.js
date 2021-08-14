const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const lengthPerStarter = {};

    for (const num of range(1, 1000000).toArray()) {
      let target = num;
      const chain = [];
      let lengthOfChain = null;

      while (true) {
        if (chain.includes(target)) {
          break;
        }

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
