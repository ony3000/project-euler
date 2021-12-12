import { SolutionFunction } from '../../lib/types';
import { sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  for (let num = 10; num <= 354294; num += 1) {
    const sumOfPowers = sum(String(num).split('').map((digit) => Number(digit) ** 5));

    if (sumOfPowers === num) {
      answer += num;
    }
  }

  return answer;
};

export default solution;
