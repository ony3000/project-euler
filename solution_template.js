const rootPath = require('app-root-path');
/* Import node library here. */

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
/* Import custom made library here. */

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    /* Write code to calculate the answer here. */

    return answer;
  }
}

(() => {
  // To measure execution time, uncomment the two comments below.

  const solution = new Solution();

  // solution.start();

  const result = solution.execute();

  // solution.stop();

  console.log(result);
})();
