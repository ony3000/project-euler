import { isPrime } from 'mathjs';

import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 2;

  let num = 3;

  while (num < 2000000) {
    if (isPrime(num)) {
      answer += num;
    }

    num += 2;
  }

  return answer;
};

export default solution;
