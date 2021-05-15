const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    outerLoop:
    for (let a = 332; a > 0; a -= 1) {
      for (let b = a + 1; b < Math.ceil((1000 - a) / 2); b += 1) {
        const c = 1000 - (a + b);

        if (a ** 2 + b ** 2 === c ** 2) {
          answer = a * b * c;
          break outerLoop;
        }
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
