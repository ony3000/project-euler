const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { primeFactorization } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let maxCycleLength = 0;

    for (const num of range(2, 1000).valueOf()) {
      const primeFactors = primeFactorization(num);
      const hasRecurringCycle = primeFactors.some((factor) => (factor !== 2 && factor !== 5));
      let recurringCycleLength = 1;

      if (hasRecurringCycle) {
        const a = BigInt(Math.max(primeFactors.count(2), primeFactors.count(5)));
        let b = a + 1n;

        while ((10n ** b - 10n ** a) % BigInt(num) !== 0n) {
          b += 1n;
        }

        recurringCycleLength = Number(b - a);
      }

      if (maxCycleLength < recurringCycleLength) {
        maxCycleLength = recurringCycleLength;
        answer = num;
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
