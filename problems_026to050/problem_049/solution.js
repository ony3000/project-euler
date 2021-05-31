const rootPath = require('app-root-path');
const { setCartesian, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const primesPerDigits = {};

    for (let num = 3; num < 10000; num += 2) {
      if (num < 1000 || !isPrime(num)) {
        continue;
      }

      const prime = num;
      const digitSet = String(prime).split('');
      const combination = digitSet.slice().sort().join('');

      primesPerDigits[combination] = primesPerDigits[combination] || [];
      primesPerDigits[combination].push(prime);
    }

    for (let combination of Object.keys(primesPerDigits)) {
      if (primesPerDigits[combination].length < 3) {
        continue;
      }

      const permutablePrimes = primesPerDigits[combination];

      for (let [ a, b ] of setCartesian(permutablePrimes, permutablePrimes)) {
        if (a >= b) {
          continue;
        }

        const c = 2 * b - a;

        if (permutablePrimes.includes(c) && b !== 4817 && a !== 1487) {
          answer = String(a) + String(b) + String(c);
          break;
        }
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
