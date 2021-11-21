import { SolutionFunction } from '../../lib/types';
import { naturalSum, squareSum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = null;

  answer = naturalSum(100) ** 2 - squareSum(100);

  return answer;
};

export default solution;
