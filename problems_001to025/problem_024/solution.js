const Stopwatch = require('../../lib/Stopwatch');
const { nthLexicographicPermutation } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    answer = nthLexicographicPermutation(1000000, '0123456789'.split(''));

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
