const { naturalSum, squareSum } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  answer = naturalSum(100) ** 2 - squareSum(100);

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
