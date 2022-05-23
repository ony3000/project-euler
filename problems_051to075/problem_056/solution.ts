import { SolutionFunction } from '@/lib/types';
import { range, sum } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const integers = range(1, 100);

  answer = Math.max(...integers.map((a) => {
    return Math.max(...integers.map((b) => {
      const num = BigInt(a) ** BigInt(b);
      const sumOfDigits = sum(String(num).split('').map((digit) => Number(digit)));

      return sumOfDigits;
    }));
  }));

  return answer;
};

export default solution;
