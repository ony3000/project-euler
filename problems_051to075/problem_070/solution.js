const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { primeFactorization } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let minRatio = null;

    for (const num of range(2, 10 ** 7 + 1).toArray()) {
      const primeFactors = primeFactorization(num);
      const counter = {};

      primeFactors.forEach((prime) => {
        counter[prime] = (counter[prime] || 0) + 1;
      });

      let phiValue = 1;

      for (const [primeString, exponent] of Object.entries(counter)) {
        const prime = Number(primeString);

        phiValue *= (prime ** (exponent - 1) * (prime - 1));
      }

      if (String(num).split('').sort().join('') === String(phiValue).split('').sort().join('')) {
        if (minRatio === null || minRatio > num / phiValue) {
          minRatio = num / phiValue;
          answer = num;
        }
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
