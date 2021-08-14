const rootPath = require('app-root-path');
const { range, sum, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const limit = 1000000;
    let n = 0;
    let approximateValue = 0;

    while (approximateValue < limit) {
      n += 1;
      approximateValue = n ** 2 * Math.log(n) / 2;
    }

    const primes = [2];
    let num = 3;

    while (primes.length < n) {
      if (isPrime(num)) {
        primes.push(num);
      }

      num += 2;
    }

    for (const length of range(n, 0, -1).valueOf()) {
      for (const startIndex of range(0, n - length + 1).valueOf()) {
        const endIndex = startIndex + length;
        const consecutiveSum = sum(primes.slice(startIndex, endIndex));

        if (consecutiveSum < limit && isPrime(consecutiveSum)) {
          answer = consecutiveSum;
          break;
        }
      }

      if (answer !== null) {
        break;
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
