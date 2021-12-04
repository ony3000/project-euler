import { isPrime } from 'mathjs';

import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let count = 1;
  let num = 3;

  while (answer === null) {
    if (isPrime(num)) {
      count += 1;

      if (count === 10001) {
        answer = num;
        break;
      }
    }

    num += 2;
  }

  return answer;
};

export default solution;
