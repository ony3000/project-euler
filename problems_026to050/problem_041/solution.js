const rootPath = require('app-root-path');
const { range, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial, nthLexicographicPermutation } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (let pandigitalLength of [4, 5, 7, 8]) {
      const digits = range(1, pandigitalLength + 1).valueOf().map((num) => String(num));

      for (let order of range(1, Number(factorial(pandigitalLength)) + 1).valueOf()) {
        const permutation = Number(nthLexicographicPermutation(order, digits));

        if (isPrime(permutation) && answer < permutation) {
          answer = permutation;
        }
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
