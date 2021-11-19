const { sum } = require('mathjs');

const solution = () => {
  let answer = null;

  answer = sum(String(2n ** 1000n).split('').map((digit) => Number(digit)));

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
