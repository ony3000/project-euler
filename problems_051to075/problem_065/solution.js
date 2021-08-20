const rootPath = require('app-root-path');
const { sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const reversedSequence = [2];

    for (let order = 2; order <= 100; order += 1) {
      if (order % 3 === 0) {
        const quotient = Math.floor(order / 3);

        reversedSequence.unshift(2 * quotient);
      }
      else {
        reversedSequence.unshift(1);
      }
    }

    let numerator = 0n;
    let denominator = 1n;

    reversedSequence.forEach((term, index) => {
      numerator += BigInt(term) * denominator;

      if (index < reversedSequence.length - 1) {
        [numerator, denominator] = [denominator, numerator];
      }
    });

    answer = sum(String(numerator).split('').map((digit) => Number(digit)));

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
