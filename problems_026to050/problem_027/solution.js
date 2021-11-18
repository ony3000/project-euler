const { isPrime } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let maxPrimeCount = 0;
    let b = 2;

    while (b < 1001) {
      if (isPrime(b)) {
        for (let a = -b + 1; a < 1000; a += 1) {
          let n = 0;

          while (isPrime(n ** 2 + a * n + b)) {
            n += 1;
          }

          if (maxPrimeCount < n) {
            maxPrimeCount = n;
            answer = a * b;
          }
        }
      }

      if (b === 2) {
        b += 1;
      }
      else {
        b += 2;
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
