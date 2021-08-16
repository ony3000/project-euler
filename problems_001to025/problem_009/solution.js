const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    for (const a of range(332, 0, -1).valueOf()) {
      for (const b of range(a + 1, Math.ceil((1000 - a) / 2)).valueOf()) {
        const c = 1000 - (a + b);

        if (a ** 2 + b ** 2 === c ** 2) {
          answer = a * b * c;
          break;
        }
      }

      if (answer !== null) {
        break;
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
