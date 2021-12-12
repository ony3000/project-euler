import { SolutionFunction } from '../../lib/types';
import { sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const reversedSequence = [2];

  for (let order = 2; order <= 100; order += 1) {
    if (order % 3 === 0) {
      const quotient = Math.floor(order / 3);

      reversedSequence.unshift(2 * quotient);
    }
    else {
      reversedSequence.unshift(1);
    }
  }

  let numerator = 0n;
  let denominator = 1n;

  reversedSequence.forEach((term, index) => {
    numerator += BigInt(term) * denominator;

    if (index < reversedSequence.length - 1) {
      [numerator, denominator] = [denominator, numerator];
    }
  });

  answer = sum(String(numerator).split('').map((digit) => Number(digit)));

  return answer;
};

export default solution;
