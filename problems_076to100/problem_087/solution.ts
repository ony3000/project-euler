import { isPrime } from 'mathjs';

import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const expressibleNumbers: number[] = [];
  const limit = 50000000;
  const primeLimit = Math.sqrt(limit);
  const primes = [2];
  let num = 3;

  while (num < primeLimit) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 2;
  }

  for (let fourthPowerIndex = 0; fourthPowerIndex < primes.length; fourthPowerIndex += 1) {
    const fourthPowerBase = primes[fourthPowerIndex];

    if (fourthPowerBase ** 4 >= limit) {
      break;
    }

    for (let cubeIndex = 0; cubeIndex < primes.length; cubeIndex += 1) {
      const cubeBase = primes[cubeIndex];

      if (cubeBase ** 3 >= limit) {
        break;
      }

      for (let squareIndex = 0; squareIndex < primes.length; squareIndex += 1) {
        const squareBase = primes[squareIndex];
        const sumOfPrimePowers = squareBase ** 2 + cubeBase ** 3 + fourthPowerBase ** 4;

        if (sumOfPrimePowers < limit) {
          expressibleNumbers.push(sumOfPrimePowers);
        }
      }
    }
  }

  answer = new Set(expressibleNumbers).size;

  return answer;
};

export default solution;
