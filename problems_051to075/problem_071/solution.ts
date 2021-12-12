import { SolutionFunction } from '../../lib/types';
import { gcd } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let maxRatio = 0;

  for (let denominator = 2; denominator <= 1000000; denominator += 1) {
    let maxNumerator = Math.floor((denominator * 3) / 7);

    if (maxNumerator === (denominator * 3) / 7) {
      maxNumerator -= 1;
    }

    for (let numerator = maxNumerator; numerator > 0; numerator -= 1) {
      if (gcd(numerator, denominator) === 1) {
        const ratio = numerator / denominator;

        if (maxRatio < ratio) {
          maxRatio = ratio;
          answer = numerator;
        }

        break;
      }
    }
  }

  return answer;
};

export default solution;
