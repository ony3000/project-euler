const { range, isPrime } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');
const { factorial, nthLexicographicPermutation } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    [4, 5, 7, 8].forEach((pandigitalLength) => {
      const digits = range(1, pandigitalLength + 1).valueOf().map((num) => String(num));

      for (let order = 1; order <= Number(factorial(pandigitalLength)); order += 1) {
        const permutation = Number(nthLexicographicPermutation(order, digits));

        if (isPrime(permutation) && answer < permutation) {
          answer = permutation;
        }
      }
    });

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
