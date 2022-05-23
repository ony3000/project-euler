import { isPrime } from 'mathjs';

import { SolutionFunction } from '@/lib/types';
import { isNumberArray } from '@/lib/type-guard';
import { setUnion } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

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

  filteredPrimes.forEach((prime) => {
    if (!circularPrimes.includes(prime)) {
      let isCircularPrime = true;
      let circularPrimeCandidates = [prime];
      const temp = String(prime);

      for (let index = 1; index < temp.length; index += 1) {
        const rotatedNum = Number(temp.slice(index) + temp.slice(0, index));

        if (isPrime(rotatedNum)) {
          const union = setUnion(circularPrimeCandidates, [rotatedNum]);

          if (isNumberArray(union)) {
            circularPrimeCandidates = union;
          }
        }
        else {
          isCircularPrime = false;
          break;
        }
      }

      if (isCircularPrime) {
        const union = setUnion(circularPrimes, circularPrimeCandidates);

        if (isNumberArray(union)) {
          circularPrimes = union;
        }
      }
    }
  });

  answer = circularPrimes.length;

  return answer;
};

export default solution;
