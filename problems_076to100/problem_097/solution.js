const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 28433;

    for (let num = 1; num <= 7830457; num += 1) {
      answer *= 2;
      answer %= (10 ** 10);
    }

    answer += 1;
    answer %= (10 ** 10);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
