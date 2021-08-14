const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (const n of range(1, 100, true).toArray()) {
      const half = Math.floor(n / 2);

      for (const r of range(0, half, true).toArray()) {
        const binomialCoefficient = factorial(n) / (factorial(r) * factorial(n - r));

        if (binomialCoefficient > 1000000) {
          if (r < n / 2) {
            answer += 2;
          }
          else {
            answer += 1;
          }
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
