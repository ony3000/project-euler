const { gcd } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = 1;

    for (let num = 1; num <= 20; num += 1) {
      answer = (answer * num) / gcd(answer, num);
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
