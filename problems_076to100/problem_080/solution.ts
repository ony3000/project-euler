import type { MathJsStatic } from 'mathjs';
import { create, all } from 'mathjs';

import { SolutionFunction } from '../../lib/types';

const { bignumber, sqrt, sum, isInteger } = create(all, {
  precision: 105,
}) as MathJsStatic;

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  for (let num = 1; num <= 100; num += 1) {
    if (!isInteger(sqrt(num))) {
      const squareRootString = sqrt(bignumber(num)).toString();

      answer += sum(squareRootString.replace('.', '').slice(0, 100).split('').map((digit) => Number(digit)));
    }
  }

  return answer;
};

export default solution;
