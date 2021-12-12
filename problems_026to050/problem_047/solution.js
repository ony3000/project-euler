const { primeFactorization } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  const numberOfPrimeFactors = [0, 0, 0, 0];
  let num = 2;

  while (answer === null) {
    numberOfPrimeFactors[num % 4] = new Set(primeFactorization(num)).size;

    if (numberOfPrimeFactors.every((primeFactorCount) => (primeFactorCount === 4))) {
      answer = num - 3;
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
