import { isPrime } from 'mathjs';

import { SolutionFunction, Dictionary } from '../../lib/types';
import { sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const primeDict: Dictionary<boolean> = {
    2: true,
  };
  const primeSetSize = 5;
  let orderedPrimes = [2];
  let num = 3;

  const findPrimePairSet = (baseConnectablePrimes: number[], otherPrimes: number[]): number[] => {
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

        if (primePairSet.length) {
          return primePairSet;
        }
      }
    }

    return [];
  };

  while (answer === null) {
    if (!(num in primeDict)) {
      primeDict[num] = isPrime(num);
    }

    if (primeDict[num]) {
      const smallerPrimes = orderedPrimes.slice();

      orderedPrimes = [num, ...smallerPrimes];

      const primePairSet = findPrimePairSet([num], smallerPrimes);

      if (primePairSet.length) {
        answer = sum(primePairSet);
      }
    }

    num += 2;
  }

  return answer;
};

export default solution;
