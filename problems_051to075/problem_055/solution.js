const { isPalindrome } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  const iterationLimit = 49;

  for (let starter = 1; starter < 10000; starter += 1) {
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
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
