import { SolutionFunction, NumberDictionary } from '../../lib/types';
import { positiveDivisors, sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = null;

  const amicableNumbers: number[] = [];
  const divisorSumPerNumber: NumberDictionary = {
    0: 0,
  };

  for (let num = 1; num < 10000; num += 1) {
    const properDivisors = positiveDivisors(num).slice(0, -1);
    const divisorSum = properDivisors.length ? sum(properDivisors) : 0;

    divisorSumPerNumber[num] = divisorSum;

    if (divisorSum < num && divisorSumPerNumber[divisorSum] === num) {
      amicableNumbers.push(num, divisorSum);
    }
  }

  answer = sum(amicableNumbers);

  return answer;
};

export default solution;
