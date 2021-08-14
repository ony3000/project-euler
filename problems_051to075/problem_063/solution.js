const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let num = 0;
    const maxBase = 10;
    let minBase = null;
    let baseCount = null;

    while (baseCount !== 0) {
      if (baseCount !== null) {
        answer += baseCount;
      }

      num += 1;
      minBase = Math.ceil(10 ** ((num - 1) / num));
      baseCount = maxBase - minBase;
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
