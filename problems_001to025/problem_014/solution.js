const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let maxSequenceLength = 0;
    const lengthPerStarter = {};

    for (const starter of range(1, 1000000).valueOf()) {
      let num = starter;
      let length = 1;

      while (num > 1) {
        if (num % 2 === 0) {
          num /= 2;
        }
        else {
          num = 3 * num + 1;
        }

        if (num in lengthPerStarter) {
          length += lengthPerStarter[num];
          break;
        }
        else {
          length += 1;
        }
      }

      lengthPerStarter[starter] = length;

      if (maxSequenceLength < length) {
        maxSequenceLength = length;
        answer = starter;
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
