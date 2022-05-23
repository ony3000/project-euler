import { isPrime } from 'mathjs';

import { SolutionFunction } from '@/lib/types';
import { range, factorial, nthLexicographicPermutation } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  answer = Math.max(...[4, 5, 7, 8].map((pandigitalLength) => {
    const digits = range(1, pandigitalLength + 1).map((num) => String(num));
    let maxPermutation = 0;

    for (let order = 1; order <= Number(factorial(pandigitalLength)); order += 1) {
      const permutation = Number(nthLexicographicPermutation(order, digits));

      if (isPrime(permutation) && maxPermutation < permutation) {
        maxPermutation = permutation;
      }
    }

    return maxPermutation;
  }));

  return answer;
};

export default solution;
