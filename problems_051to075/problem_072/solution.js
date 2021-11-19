const { primeFactorization } = require('../../lib/toolbox');

const solution = () => {
  let answer = 0;

  for (let num = 2; num <= 1000000; num += 1) {
    const primeFactors = primeFactorization(num);
    const counter = {};

    primeFactors.forEach((prime) => {
      counter[prime] = (counter[prime] || 0) + 1;
    });

    let phiValue = 1;

    Object.entries(counter).forEach(([primeString, exponent]) => {
      const prime = Number(primeString);

      phiValue *= (prime ** (exponent - 1) * (prime - 1));
    });

    answer += phiValue;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
