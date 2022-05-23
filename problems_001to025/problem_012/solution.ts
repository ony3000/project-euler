import { SolutionFunction } from '@/lib/types';
import { naturalSum, positiveDivisors } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let num = 1;

  while (answer === null) {
    const triangleNumber = naturalSum(num);
    const divisors = positiveDivisors(triangleNumber);

    if (divisors.length > 500) {
      answer = triangleNumber;
      break;
    }

    num += 1;
  }

  return answer;
};

export default solution;
