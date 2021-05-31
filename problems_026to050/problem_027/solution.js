const rootPath = require('app-root-path');
const { range, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let maxPrimeCount = 0;
    let b = 2;

    while (b < 1001) {
      if (isPrime(b)) {
        for (let a of range(-b + 1, 1000).valueOf()) {
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

  console.log(result);
})();
