const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    for (let a = 332; a > 0; a -= 1) {
      for (let b = a + 1; b < Math.ceil((1000 - a) / 2); b += 1) {
        const c = 1000 - (a + b);

        if (a ** 2 + b ** 2 === c ** 2) {
          answer = a * b * c;
          break;
        }
      }

      if (answer !== null) {
        break;
      }
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
