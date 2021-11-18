const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    let [a, b] = [1, 2];

    while (b <= 4000000) {
      answer += b;
      [a, b] = [(a + 2 * b), (2 * a + 3 * b)];
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
