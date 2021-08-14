const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { naturalSum, positiveDivisors } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let num = 1;

    while (true) {
      const triangleNumber = naturalSum(num);
      const divisors = positiveDivisors(triangleNumber);

      if (divisors.length > 500) {
        answer = triangleNumber;
        break;
      }

      num += 1;
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
