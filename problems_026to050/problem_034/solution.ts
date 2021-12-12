import { SolutionFunction } from '../../lib/types';
import { range, sum, factorial } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const factorialPerDigit = range(0, 10).map((index) => Number(factorial(index)));

  for (let num = 10; num <= 2540160; num += 1) {
    const sumOfFactorials = sum(String(num).split('').map((digit) => factorialPerDigit[Number(digit)]));

    if (sumOfFactorials === num) {
      answer += num;
    }
  }

  return answer;
};

export default solution;
