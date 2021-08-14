const rootPath = require('app-root-path');
const { range, setCartesian, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const integers = range(1, 100).toArray();

    for (const [a, b] of setCartesian(integers, integers)) {
      const num = BigInt(a) ** BigInt(b);
      const sumOfDigits = sum(String(num).split('').map((digit) => Number(digit)));

      if (answer < sumOfDigits) {
        answer = sumOfDigits;
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
