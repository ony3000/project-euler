import { SolutionFunction } from '../../lib/types';
import { naturalSum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = 0;

  answer += 3 * naturalSum(Math.floor(999 / 3));
  answer += 5 * naturalSum(Math.floor(999 / 5));
  answer -= 15 * naturalSum(Math.floor(999 / 15));

  return answer;
};

export default solution;
