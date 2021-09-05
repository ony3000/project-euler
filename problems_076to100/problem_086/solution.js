const rootPath = require('app-root-path');
const { isInteger } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let M = 1;
    let integerRouteCount = 0;

    while (answer === null) {
      const length = M;

      for (let width = M; width >= 1; width -= 1) {
        for (let height = width; height >= 1; height -= 1) {
          const shortestRoute = Math.min(
            Math.sqrt(length ** 2 + (width + height) ** 2),
            Math.sqrt(width ** 2 + (height + length) ** 2),
            Math.sqrt(height ** 2 + (length + width) ** 2),
          );

          if (isInteger(shortestRoute)) {
            integerRouteCount += 1;
          }
        }
      }

      if (integerRouteCount >= 1000000) {
        answer = M;
        break;
      }

      M += 1;
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
