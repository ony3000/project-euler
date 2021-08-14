const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { isPalindrome } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const iterationLimit = 49;

    for (const starter of range(1, 10000).toArray()) {
      let num = starter;
      let iterationCount = 0;

      while (iterationCount < iterationLimit) {
        const reversedNum = Number(String(num).split('').reverse().join(''));

        num += reversedNum;

        if (isPalindrome(String(num))) {
          break;
        }

        iterationCount += 1;
      }

      if (iterationCount === iterationLimit) {
        answer += 1;
      }
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
