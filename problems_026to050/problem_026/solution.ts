import { SolutionFunction } from '../../lib/types';
import { primeFactorization, count } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let maxCycleLength = 0;

  for (let num = 2; num < 1000; num += 1) {
    const primeFactors = primeFactorization(num);
    const hasRecurringCycle = primeFactors.some((factor) => (factor !== 2 && factor !== 5));
    let recurringCycleLength = 1;

    if (hasRecurringCycle) {
      const a = BigInt(Math.max(count(primeFactors, 2), count(primeFactors, 5)));
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
};

export default solution;
