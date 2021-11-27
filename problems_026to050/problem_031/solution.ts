import { SolutionFunction } from '../../lib/types';
import { numberOfPartitions } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = null;

  answer = numberOfPartitions(200, [1, 2, 5, 10, 20, 50, 100, 200]);

  return answer;
};

export default solution;
