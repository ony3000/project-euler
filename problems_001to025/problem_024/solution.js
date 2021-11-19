const { nthLexicographicPermutation } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  answer = nthLexicographicPermutation(1000000, '0123456789'.split(''));

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
