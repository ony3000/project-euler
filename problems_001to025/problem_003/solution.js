const { primeFactorization } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  [answer] = primeFactorization(600851475143).slice(-1);

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
