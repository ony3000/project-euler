const rootPath = require('app-root-path');
const { range, setCartesian } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    let dayOfWeek = 1;

    for (const [year, month] of setCartesian(range(1900, 2001).valueOf(), range(1, 13).valueOf())) {
      if (year >= 1901 && dayOfWeek === 0) {
        answer += 1;
      }

      if ([4, 6, 9, 11].includes(month)) {
        dayOfWeek += 30;
      }
      else if (month !== 2) {
        dayOfWeek += 31;
      }
      else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        dayOfWeek += 29;
      }
      else {
        dayOfWeek += 28;
      }

      dayOfWeek %= 7;
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
