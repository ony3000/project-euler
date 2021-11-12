const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const source = fs.readFileSync(path.resolve(__dirname, 'base_exp.txt'));
    const pairs = source.toString().trim().split('\n').map((line) => line.trim().split(',').map((value) => Number(value)));

    let largestLogValue = 0;

    pairs.forEach(([base, exponent], index) => {
      const logValue = exponent * Math.log(base);

      if (largestLogValue < logValue) {
        largestLogValue = logValue;
        answer = index + 1;
      }
    });

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
