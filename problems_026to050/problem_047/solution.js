const Stopwatch = require('../../lib/Stopwatch');
const { primeFactorization } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const numberOfPrimeFactors = [0, 0, 0, 0];
    let num = 2;

    while (answer === null) {
      numberOfPrimeFactors[num % 4] = new Set(primeFactorization(num)).size;

      if (numberOfPrimeFactors.every((primeFactorCount) => (primeFactorCount === 4))) {
        answer = num - 3;
      }

      num += 1;
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
