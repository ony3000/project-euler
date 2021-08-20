const rootPath = require('app-root-path');
const { range, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial, nthLexicographicPermutation } = require(`${rootPath}/lib/toolbox.js`);

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
