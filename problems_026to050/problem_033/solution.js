const rootPath = require('app-root-path');
const {
  gcd,
  range,
  setDifference,
  setIntersect,
} = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let numeratorProduct = 1;
    let denominatorProduct = 1;

    for (const denominator of range(10, 100).valueOf()) {
      for (const numerator of range(10, denominator).valueOf()) {
        const numeratorDigits = String(numerator).split('');
        const denominatorDigits = String(denominator).split('');
        const commonDigits = setIntersect(numeratorDigits, denominatorDigits);

        if (commonDigits.length === 1 && !commonDigits.includes('0')) {
          const canceledNumerator = Number(...setDifference(numeratorDigits, commonDigits));
          const canceledDenominator = Number(...setDifference(denominatorDigits, commonDigits));

          if (canceledNumerator < canceledDenominator) {
            const originalFractionValue = numerator / denominator;
            const canceledFractionValue = canceledNumerator / canceledDenominator;

            if (originalFractionValue === canceledFractionValue) {
              numeratorProduct *= canceledNumerator;
              denominatorProduct *= canceledDenominator;
            }
          }
        }
      }
    }

    answer = denominatorProduct / gcd(numeratorProduct, denominatorProduct);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
