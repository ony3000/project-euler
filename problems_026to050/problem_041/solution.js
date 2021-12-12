const { range, isPrime } = require('mathjs');

const { factorial, nthLexicographicPermutation } = require('../../lib/toolbox');

const solution = () => {
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
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
