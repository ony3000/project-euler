const Stopwatch = require('../../lib/Stopwatch');
const { isPalindrome } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (let num = 1; num < 1000000; num += 1) {
      if (isPalindrome(String(num))) {
        const binary = num.toString(2);

        if (isPalindrome(binary)) {
          answer += num;
        }
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
