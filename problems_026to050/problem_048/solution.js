const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = sum(range(1, 1001).valueOf().map((num) => Number((BigInt(num) ** BigInt(num)) % (10n ** 10n)))) % (10 ** 10);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
