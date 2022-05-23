import { SolutionFunction } from '@/lib/types';
import { gcd } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  for (let denominator = 2; denominator <= 12000; denominator += 1) {
    let maxNumerator = Math.floor(denominator / 2);

    if (maxNumerator === denominator / 2) {
      maxNumerator -= 1;
    }

    let minNumerator = Math.ceil(denominator / 3);

    if (minNumerator === denominator / 3) {
      minNumerator += 1;
    }

    for (let numerator = minNumerator; numerator <= maxNumerator; numerator += 1) {
      if (gcd(numerator, denominator) === 1) {
        answer += 1;
      }
    }
  }

  return answer;
};

export default solution;
