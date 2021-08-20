const rootPath = require('app-root-path');
const { sum, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const primeDict = {
      2: true,
    };
    const primeSetSize = 5;

    const findPrimePairSet = (baseConnectablePrimes, otherPrimes) => {
      for (let index = 0; index < otherPrimes.length; index += 1) {
        const anotherPrime = otherPrimes[index];
        let isAllPrime = true;

        baseConnectablePrimes.every((connectablePrime) => {
          const forwardConnected = Number(`${connectablePrime}${anotherPrime}`);
          const reverseConnected = Number(`${anotherPrime}${connectablePrime}`);

          if (!(forwardConnected in primeDict)) {
            primeDict[forwardConnected] = isPrime(forwardConnected);
          }

          if (!(reverseConnected in primeDict)) {
            primeDict[reverseConnected] = isPrime(reverseConnected);
          }

          if (!primeDict[forwardConnected] || !primeDict[reverseConnected]) {
            isAllPrime = false;
          }

          return (primeDict[forwardConnected] && primeDict[reverseConnected]);
        });

        if (isAllPrime) {
          const extendedConnectablePrimes = [
            ...baseConnectablePrimes,
            anotherPrime,
          ];

          if (baseConnectablePrimes.length === primeSetSize - 1) {
            return extendedConnectablePrimes;
          }

          const moreSmallerPrimes = otherPrimes.slice(Number(index) + 1);
          const primePairSet = findPrimePairSet(extendedConnectablePrimes, moreSmallerPrimes);

          if (primePairSet !== null) {
            return primePairSet;
          }
        }
      }

      return null;
    };

    let orderedPrimes = [2];
    let num = 3;

    while (answer === null) {
      if (!(num in primeDict)) {
        primeDict[num] = isPrime(num);
      }

      if (primeDict[num]) {
        const smallerPrimes = orderedPrimes.slice();

        orderedPrimes = [num, ...smallerPrimes];

        const primePairSet = findPrimePairSet([num], smallerPrimes);

        if (primePairSet !== null) {
          answer = sum(primePairSet);
        }
      }

      num += 2;
    }

    return answer;
  }
}

(() => {
  // To measure execution time, uncomment the two comments below.

  const solution = new Solution();

  solution.start();

  const result = solution.execute();

  solution.stop();

  // eslint-disable-next-line no-console
  console.log(result);
})();
