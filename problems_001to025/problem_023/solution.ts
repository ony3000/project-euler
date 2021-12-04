import { SolutionFunction } from '../../lib/types';
import { naturalSum, positiveDivisors, sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const abundantNumbers: number[] = [];
  const twoAbundantSums: Set<number> = new Set();

  for (let num = 1; num <= 28123; num += 1) {
    const properDivisors = positiveDivisors(num).slice(0, -1);
    const divisorSum = properDivisors.length ? sum(properDivisors) : 0;

    if (divisorSum > num) {
      abundantNumbers.push(num);

      abundantNumbers.every((abundant) => {
        const abundantSum = abundant + num;

        if (abundantSum <= 28123) {
          twoAbundantSums.add(abundantSum);
        }

        return abundantSum <= 28123;
      });
    }
  }

  answer = naturalSum(28123) - sum([...twoAbundantSums]);

  return answer;
};

export default solution;
