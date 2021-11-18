const { range, setIsSubset } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const pandigitalSet = '123456789'.split('');
    const multiplicandCandidates = [
      1,
      3,
      ...range(5, 10).valueOf(),
      ...range(25, 34).valueOf(),
      ...range(100, 334).valueOf(),
      ...range(5000, 10000).valueOf(),
    ];

    multiplicandCandidates.forEach((multiplicand) => {
      let concatenatedProduct = '';

      for (let n = 1; n <= 9; n += 1) {
        const product = multiplicand * n;

        concatenatedProduct += String(product);

        if (concatenatedProduct.length === 9) {
          break;
        }
      }

      const productDigitSet = concatenatedProduct.split('');

      if (
        answer < Number(concatenatedProduct)
          && setIsSubset(productDigitSet, pandigitalSet)
          && setIsSubset(pandigitalSet, productDigitSet)
      ) {
        answer = Number(concatenatedProduct);
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
