const Stopwatch = require('../../lib/Stopwatch');
const { primeFactorization } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    [answer] = primeFactorization(600851475143).slice(-1);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
