const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial, nthLexicographicPermutation } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const pandigitalProducts = new Set();
    const limit = Number(factorial(9));

    for (let order = 1; order <= limit; order += 1) {
      const permutation = nthLexicographicPermutation(order, '123456789'.split(''));
      const product = Number(permutation.slice(5));

      if (
        Number(permutation.slice(0, 1)) * Number(permutation.slice(1, 5)) === product
          || Number(permutation.slice(0, 2)) * Number(permutation.slice(2, 5)) === product
      ) {
        pandigitalProducts.add(product);
      }
    }

    pandigitalProducts.forEach((product) => {
      answer += product;
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
