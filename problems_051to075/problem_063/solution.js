const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let num = 0;

    while (true) {
      num += 1;

      const minBase = Math.ceil(10 ** ((num - 1) / num));
      const maxBase = 10;
      const baseCount = maxBase - minBase;

      if (baseCount === 0) {
        break;
      }

      answer += baseCount;
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
