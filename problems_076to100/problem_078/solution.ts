import { SolutionFunction } from '@/lib/types';
import { numberOfIntegerPartitions } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let num = 1;

  while (answer === null) {
    if (numberOfIntegerPartitions(num) % 1000000n === 0n) {
      answer = num;
      break;
    }

    num += 1;
  }

  return answer;
};

export default solution;
