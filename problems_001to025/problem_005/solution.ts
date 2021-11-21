import { SolutionFunction } from '../../lib/types';
import { gcd } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = 1;

  for (let num = 1; num <= 20; num += 1) {
    answer = (answer * num) / gcd(answer, num);
  }

  return answer;
};

export default solution;
