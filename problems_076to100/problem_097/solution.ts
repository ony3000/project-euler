import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 28433;

  for (let num = 1; num <= 7830457; num += 1) {
    answer *= 2;
    answer %= (10 ** 10);
  }

  answer += 1;
  answer %= (10 ** 10);

  return answer;
};

export default solution;
