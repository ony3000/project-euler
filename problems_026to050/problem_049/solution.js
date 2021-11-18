const { isPrime } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
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
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
