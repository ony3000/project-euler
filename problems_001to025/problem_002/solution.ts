import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  let [a, b] = [1, 2];

  while (b <= 4000000) {
    answer += b;
    [a, b] = [(a + 2 * b), (2 * a + 3 * b)];
  }

  return answer;
};

export default solution;
