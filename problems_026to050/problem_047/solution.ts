import { SolutionFunction } from '../../lib/types';
import { primeFactorization } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const numberOfPrimeFactors = [0, 0, 0, 0];
  let num = 2;

  while (answer === null) {
    numberOfPrimeFactors[num % 4] = new Set(primeFactorization(num)).size;

    if (numberOfPrimeFactors.every((primeFactorCount) => (primeFactorCount === 4))) {
      answer = num - 3;
    }

    num += 1;
  }

  return answer;
};

export default solution;
