import { SolutionFunction } from '@/lib/types';
import { range } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const integers = range(2, 101);
  const terms: Set<number> = new Set();

  integers.forEach((a) => {
    integers.forEach((b) => {
      terms.add(a ** b);
    });
  });

  answer = terms.size;

  return answer;
};

export default solution;
