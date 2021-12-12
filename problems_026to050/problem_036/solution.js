const { isPalindrome } = require('../../lib/toolbox');

const solution = () => {
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
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
