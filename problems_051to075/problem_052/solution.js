const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let exponent = 0;

    while (answer === null) {
      const start = 10 ** exponent;
      const end = Math.floor(start * 10 / 6);

      for (const num of range(start, end, true).toArray()) {
        let hasSameDigits = true;
        const ascendingDigits = String(num).split('').sort().join('');

        for (const coefficient of range(2, 6, true).toArray()) {
          const anotherAscendingDigits = String(num * coefficient).split('').sort().join('');

          if (ascendingDigits !== anotherAscendingDigits) {
            hasSameDigits = false;
            break;
          }
        }

        if (hasSameDigits) {
          answer = num;
          break;
        }
      }

      exponent += 1;
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
