import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 2;

  let [a, b] = [1n, 1n];

  while (String(b).length < 1000) {
    [a, b] = [b, (a + b)];
    answer += 1;
  }

  return answer;
};

export default solution;
