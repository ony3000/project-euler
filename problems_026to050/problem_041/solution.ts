import { isPrime } from 'mathjs';

import { SolutionFunction } from '../../lib/types';
import { range, factorial, nthLexicographicPermutation } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = 0;

  [4, 5, 7, 8].forEach((pandigitalLength) => {
    const digits = range(1, pandigitalLength + 1).map((num) => String(num));

    for (let order = 1; order <= Number(factorial(pandigitalLength)); order += 1) {
      const permutation = Number(nthLexicographicPermutation(order, digits));

      if (isPrime(permutation) && answer < permutation) {
        answer = permutation;
      }
    }
  });

  return answer;
};

export default solution;
