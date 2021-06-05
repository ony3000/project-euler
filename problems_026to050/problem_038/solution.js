const rootPath = require('app-root-path');
const { range, setIsSubset } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

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

    for (let multiplicand of multiplicandCandidates) {
      let concatenatedProduct = '';

      for (let n of range(1, 10).valueOf()) {
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
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
