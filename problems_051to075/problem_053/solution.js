const Stopwatch = require('../../lib/Stopwatch');
const { factorial } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (let n = 1; n <= 100; n += 1) {
      const half = Math.floor(n / 2);

      for (let r = 0; r <= half; r += 1) {
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
