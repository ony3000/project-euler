const rootPath = require('app-root-path');
const { gcd, range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 1;

    for (let num of range(1, 21).valueOf()) {
      answer = answer * num / gcd(answer, num);
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();