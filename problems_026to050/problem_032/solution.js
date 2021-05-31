const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial, nthLexicographicPermutation } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const pandigitalProducts = new Set();
    const limit = Number(factorial(9));

    for (let order of range(1, limit + 1).valueOf()) {
      const permutation = nthLexicographicPermutation(order, '123456789'.split(''));
      const product = Number(permutation.slice(5));

      if (
        Number(permutation.slice(0, 1)) * Number(permutation.slice(1, 5)) === product
          || Number(permutation.slice(0, 2)) * Number(permutation.slice(2, 5)) === product
      ) {
        pandigitalProducts.add(product);
      }
    }

    for (let product of pandigitalProducts) {
      answer += product;
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
