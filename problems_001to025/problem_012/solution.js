const { naturalSum, positiveDivisors } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  let num = 1;

  while (answer === null) {
    const triangleNumber = naturalSum(num);
    const divisors = positiveDivisors(triangleNumber);

    if (divisors.length > 500) {
      answer = triangleNumber;
      break;
    }

    num += 1;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
