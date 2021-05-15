const rootPath = require('app-root-path');
const { gcd } = require('mathjs/number');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 1;

    for (let num = 2; num <= 20; num += 1) {
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
