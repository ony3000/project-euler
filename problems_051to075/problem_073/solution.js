const rootPath = require('app-root-path');
const { gcd, range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (const denominator of range(2, 12000 + 1).toArray()) {
      let maxNumerator = Math.floor(denominator * 1 / 2);

      if (maxNumerator === denominator * 1 / 2) {
        maxNumerator -= 1;
      }

      let minNumerator = Math.ceil(denominator * 1 / 3);

      if (minNumerator === denominator * 1 / 3) {
        minNumerator += 1;
      }

      for (let numerator = minNumerator; numerator <= maxNumerator; numerator += 1) {
        if (gcd(numerator, denominator) === 1) {
          answer += 1;
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
