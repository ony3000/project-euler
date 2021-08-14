const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { primeFactorization } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let maxRatio = 0;

    for (const num of range(2, 1000001).toArray()) {
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

      if (maxRatio < num / phiValue) {
        maxRatio = num / phiValue;
        answer = num;
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
