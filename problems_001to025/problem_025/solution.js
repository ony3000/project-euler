const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = 2;

    let [a, b] = [1n, 1n];

    while (String(b).length < 1000) {
      [a, b] = [b, (a + b)];
      answer += 1;
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
