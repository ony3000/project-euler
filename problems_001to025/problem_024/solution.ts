import { SolutionFunction } from '@/lib/types';
import { nthLexicographicPermutation } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  answer = nthLexicographicPermutation(1000000, '0123456789'.split(''));

  return answer;
};

export default solution;
