const { range } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const integers = range(2, 101).valueOf();
    const terms = new Set();

    integers.forEach((a) => {
      integers.forEach((b) => {
        terms.add(a ** b);
      });
    });

    answer = terms.size;

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
