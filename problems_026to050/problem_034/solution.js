const { sum } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');
const { factorial } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const factorialPerDigit = Array(10).fill(null).map((_, index) => Number(factorial(index)));

    for (let num = 10; num <= 2540160; num += 1) {
      const sumOfFactorials = sum(String(num).split('').map((digit) => factorialPerDigit[digit]));

      if (sumOfFactorials === num) {
        answer += num;
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
