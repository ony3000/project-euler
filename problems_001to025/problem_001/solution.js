const { naturalSum } = require('../../lib/toolbox');

const solution = () => {
  let answer = 0;

  answer += 3 * naturalSum(Math.floor(999 / 3));
  answer += 5 * naturalSum(Math.floor(999 / 5));
  answer -= 15 * naturalSum(Math.floor(999 / 15));

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
