import { SolutionFunction } from '@/lib/types';
import { sum } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  answer = sum(String(2n ** 1000n).split('').map((digit) => Number(digit)));

  return answer;
};

export default solution;
