const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const integers = range(1, 100).toArray();

    integers.forEach((a) => {
      integers.forEach((b) => {
        const num = BigInt(a) ** BigInt(b);
        const sumOfDigits = sum(String(num).split('').map((digit) => Number(digit)));

        if (answer < sumOfDigits) {
          answer = sumOfDigits;
        }
      });
    });

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
