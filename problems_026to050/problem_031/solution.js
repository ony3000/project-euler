const { numberOfPartitions } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  answer = numberOfPartitions(200, [1, 2, 5, 10, 20, 50, 100, 200]);

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
