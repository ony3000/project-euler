import { isPrime } from 'mathjs';

import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let n = 1;
  let nthPrime = 2;
  let modulus = 4;
  let remainder = 0;
  let num = 3;

  const modularPow = (base: number, exponent: number, modulus: number): number => {
    let result = 1n;

    exponent.toString(2).split('').forEach((binaryDigit) => {
      result *= result;
      result *= (binaryDigit === '1' ? BigInt(base) : 1n);
      result %= BigInt(modulus);
    });

    return Number(result);
  };

  while (answer === null) {
    if (isPrime(num)) {
      n += 1;
      nthPrime = num;
      modulus = nthPrime ** 2;
      remainder = (
        modularPow(nthPrime - 1, n, modulus) + modularPow(nthPrime + 1, n, modulus)
      ) % modulus;

      if (remainder > 10000000000) {
        answer = n;
        break;
      }
    }

    num += 2;
  }

  return answer;
};

export default solution;
