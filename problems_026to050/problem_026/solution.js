const Stopwatch = require('../../lib/Stopwatch');
const { primeFactorization } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let maxCycleLength = 0;

    for (let num = 2; num < 1000; num += 1) {
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

  // eslint-disable-next-line no-console
  console.log(result);
})();
