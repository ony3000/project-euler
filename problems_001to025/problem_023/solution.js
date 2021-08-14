const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { naturalSum, positiveDivisors } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const abundantNumbers = [];
    const twoAbundantSums = new Set();

    for (const num of range(1, 28124).valueOf()) {
      const properDivisors = positiveDivisors(num).slice(0, -1);
      const divisorSum = sum(properDivisors);

      if (divisorSum > num) {
        abundantNumbers.push(num);

        for (const abundant of abundantNumbers) {
          const abundantSum = abundant + num;

          if (abundantSum > 28123) {
            break;
          }
          else {
            twoAbundantSums.add(abundantSum);
          }
        }
      }
    }

    answer = naturalSum(28123) - sum([...twoAbundantSums]);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
