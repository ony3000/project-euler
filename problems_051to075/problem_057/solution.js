const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    let numerator = 1n;
    let denominator = 1n;

    for (const _ of range(0, 1000).toArray()) {
      [ numerator, denominator ] = [ (numerator + 2n * denominator), (numerator + denominator) ];

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

  console.log(result);
})();
