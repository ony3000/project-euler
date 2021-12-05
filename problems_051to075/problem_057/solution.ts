import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  let numerator = 1n;
  let denominator = 1n;

  for (let num = 0; num < 1000; num += 1) {
    [numerator, denominator] = [(numerator + 2n * denominator), (numerator + denominator)];

    if (String(numerator).length > String(denominator).length) {
      answer += 1;
    }
  }

  return answer;
};

export default solution;
