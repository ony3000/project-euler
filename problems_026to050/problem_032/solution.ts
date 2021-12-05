import { SolutionFunction } from '../../lib/types';
import { sum, factorial, nthLexicographicPermutation } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const pandigitalProducts: Set<number> = new Set();
  const limit = Number(factorial(9));

  for (let order = 1; order <= limit; order += 1) {
    const permutation = nthLexicographicPermutation(order, '123456789'.split(''));
    const product = Number(permutation.slice(5));

    if (
      Number(permutation.slice(0, 1)) * Number(permutation.slice(1, 5)) === product
        || Number(permutation.slice(0, 2)) * Number(permutation.slice(2, 5)) === product
    ) {
      pandigitalProducts.add(product);
    }
  }

  answer = sum([...pandigitalProducts]);

  return answer;
};

export default solution;
