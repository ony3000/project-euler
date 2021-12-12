const { isPrime } = require('mathjs');

const solution = () => {
  let answer = null;

  const primesPerDigits = {};

  for (let num = 3; num < 10000; num += 2) {
    if (num >= 1000 && isPrime(num)) {
      const prime = num;
      const digitSet = String(prime).split('');
      const combination = digitSet.slice().sort().join('');

      primesPerDigits[combination] = primesPerDigits[combination] || [];
      primesPerDigits[combination].push(prime);
    }
  }

  Object.keys(primesPerDigits).every((combination) => {
    if (primesPerDigits[combination].length >= 3) {
      const permutablePrimes = primesPerDigits[combination];

      return permutablePrimes.every((a) => permutablePrimes.every((b) => {
        if (a < b) {
          const c = 2 * b - a;

          if (permutablePrimes.includes(c) && b !== 4817 && a !== 1487) {
            answer = String(a) + String(b) + String(c);
          }

          return answer === null;
        }

        return true;
      }));
    }

    return true;
  });

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
