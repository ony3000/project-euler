import { isPrime } from 'mathjs';

import { SolutionFunction } from '@/lib/types';
import { sum } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const truncatablePrimes: number[] = [];
  let num = 11;

  while (truncatablePrimes.length < 11) {
    if (!String(num).includes('0') && !String(num).slice(1).includes('5')) {
      if (isPrime(num)) {
        let isTruncatablePrime = true;
        const temp = String(num);

        for (let index = 1; index < temp.length; index += 1) {
          const leftTruncated = Number(temp.slice(index));
          const rightTruncated = Number(temp.slice(0, index));

          if (!isPrime(leftTruncated) || !isPrime(rightTruncated)) {
            isTruncatablePrime = false;
            break;
          }
        }

        if (isTruncatablePrime) {
          truncatablePrimes.push(num);
        }
      }
    }

    num += 2;
  }

  answer = sum(truncatablePrimes);

  return answer;
};

export default solution;
