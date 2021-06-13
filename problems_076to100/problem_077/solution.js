const rootPath = require('app-root-path');
const { isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { numberOfPartitions } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const primes = [2];
    let num = 3;

    while (primes.length < 5000) {
      if (isPrime(num)) {
        primes.push(num);
      }

      num += 2;
    }

    num = 1;

    while (answer === null) {
      const filteredPrimes = primes.filter((prime) => (prime <= num));
      const numberOfPrimePartitions = numberOfPartitions(num, filteredPrimes);

      if (numberOfPrimePartitions > 5000) {
        answer = num;
      }

      num += 1;
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
