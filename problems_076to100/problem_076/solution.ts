import { SolutionFunction } from '../../lib/types';
import { numberOfPartitions } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  answer = numberOfPartitions(100) - 1;

  return answer;
};

export default solution;
