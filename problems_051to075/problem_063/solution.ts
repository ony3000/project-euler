import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  let num = 0;
  const maxBase = 10;
  let minBase: number | null = null;
  let baseCount: number | null = null;

  while (baseCount !== 0) {
    if (baseCount !== null) {
      answer += baseCount;
    }

    num += 1;
    minBase = Math.ceil(10 ** ((num - 1) / num));
    baseCount = maxBase - minBase;
  }

  return answer;
};

export default solution;
