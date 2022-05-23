import { isPrime } from 'mathjs';

import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let num = 9;

  while (answer === null) {
    if (!isPrime(num)) {
      let isWritableAsSum = false;
      const baseLimit = Math.floor(Math.sqrt((num - 3) / 2));

      for (let squareBase = 1; squareBase <= baseLimit; squareBase += 1) {
        if (isPrime(num - 2 * squareBase ** 2)) {
          isWritableAsSum = true;
          break;
        }
      }

      if (!isWritableAsSum) {
        answer = num;
        break;
      }
    }

    num += 2;
  }

  return answer;
};

export default solution;
