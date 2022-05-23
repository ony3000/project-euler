import { SolutionFunction } from '@/lib/types';
import { factorial } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  answer = Number(factorial(40) / (factorial(20) * factorial(20)));

  return answer;
};

export default solution;
