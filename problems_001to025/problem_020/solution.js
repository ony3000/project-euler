const { sum } = require('mathjs');

const { factorial } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  answer = sum(String(factorial(100)).split('').map((digit) => Number(digit)));

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
