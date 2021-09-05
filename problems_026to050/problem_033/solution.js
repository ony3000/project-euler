const rootPath = require('app-root-path');
const { gcd, setDifference, setIntersect } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let numeratorProduct = 1;
    let denominatorProduct = 1;

    for (let denominator = 10; denominator <= 99; denominator += 1) {
      for (let numerator = 10; numerator < denominator; numerator += 1) {
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

  // eslint-disable-next-line no-console
  console.log(result);
})();
