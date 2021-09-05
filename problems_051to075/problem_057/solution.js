const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    let numerator = 1n;
    let denominator = 1n;

    for (let num = 0; num < 1000; num += 1) {
      [numerator, denominator] = [(numerator + 2n * denominator), (numerator + denominator)];

      if (String(numerator).length > String(denominator).length) {
        answer += 1;
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
