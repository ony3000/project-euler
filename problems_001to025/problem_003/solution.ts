import { SolutionFunction } from '../../lib/types';
import { primeFactorization } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = null;

  [answer] = primeFactorization(600851475143).slice(-1);

  return answer;
};

export default solution;
