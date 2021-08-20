const rootPath = require('app-root-path');
const { setUnion, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const primes = [2];
    let num = 3;

    while (num < 1000000) {
      if (isPrime(num)) {
        primes.push(num);
      }

      num += 2;
    }

    const filteredPrimes = primes.filter((prime) => !String(prime).includes('0') && !String(prime).includes('5'));
    let circularPrimes = [5];

    filteredPrimes.forEach((num) => {
      if (!circularPrimes.includes(num)) {
        let isCircularPrime = true;
        let circularPrimeCandidates = [num];
        const temp = String(num);

        for (let index = 1; index < temp.length; index += 1) {
          const rotatedNum = Number(temp.slice(index) + temp.slice(0, index));

          if (isPrime(rotatedNum)) {
            circularPrimeCandidates = setUnion(circularPrimeCandidates, [rotatedNum]);
          }
          else {
            isCircularPrime = false;
            break;
          }
        }

        if (isCircularPrime) {
          circularPrimes = setUnion(circularPrimes, circularPrimeCandidates);
        }
      }
    });

    answer = circularPrimes.length;

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
