const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { factorial } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const factorialPerDigit = Array(10).fill(null).map((_, index) => Number(factorial(index)));

    for (const num of range(10, 2540161).valueOf()) {
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

  console.log(result);
})();
