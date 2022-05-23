import { SolutionFunction } from '@/lib/types';
import { sum, factorial } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  answer = sum(String(factorial(100)).split('').map((digit) => Number(digit)));

  return answer;
};

export default solution;
