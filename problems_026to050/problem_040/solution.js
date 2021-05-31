const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 1;

    let num = 1;
    let nextN = 1;
    let digitLength = 0;

    while (digitLength < 1000000) {
      const stringified = String(num);

      digitLength += stringified.length;

      if (digitLength >= nextN) {
        const diff = digitLength - nextN;
        const nthDigit = Number(stringified[stringified.length - (1 + diff)]);

        answer *= nthDigit;
        nextN *= 10;
      }

      num += 1;
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
