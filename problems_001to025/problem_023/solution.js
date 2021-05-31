const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { naturalSum, positiveDivisors } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let abundantNumbers = [];
    let twoAbundantSums = new Set();

    for (let num of range(1, 28124).valueOf()) {
      let properDivisors = positiveDivisors(num).slice(0, -1);
      let divisorSum = sum(properDivisors);

      if (divisorSum > num) {
        abundantNumbers.push(num);

        for (let abundant of abundantNumbers) {
          let abundantSum = abundant + num;

          if (abundantSum > 28123) {
            break;
          }
          else {
            twoAbundantSums.add(abundantSum);
          }
        }
      }
    }

    answer = naturalSum(28123) - sum([ ...twoAbundantSums ]);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
