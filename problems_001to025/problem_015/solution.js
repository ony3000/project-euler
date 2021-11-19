const { factorial } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  answer = Number(factorial(40) / (factorial(20) * factorial(20)));

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
