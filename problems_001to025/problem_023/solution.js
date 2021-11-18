const { sum } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');
const { naturalSum, positiveDivisors } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const abundantNumbers = [];
    const twoAbundantSums = new Set();

    for (let num = 1; num <= 28123; num += 1) {
      const properDivisors = positiveDivisors(num).slice(0, -1);
      const divisorSum = sum(properDivisors);

      if (divisorSum > num) {
        abundantNumbers.push(num);

        abundantNumbers.every((abundant) => {
          const abundantSum = abundant + num;

          if (abundantSum <= 28123) {
            twoAbundantSums.add(abundantSum);
          }

          return abundantSum <= 28123;
        });
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
