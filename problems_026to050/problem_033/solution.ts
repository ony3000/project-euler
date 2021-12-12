import { SolutionFunction } from '../../lib/types';
import { isStringArray } from '../../lib/type-guard';
import { gcd, setDifference, setIntersection } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let numeratorProduct = 1;
  let denominatorProduct = 1;

  for (let denominator = 10; denominator <= 99; denominator += 1) {
    for (let numerator = 10; numerator < denominator; numerator += 1) {
      const numeratorDigits = String(numerator).split('');
      const denominatorDigits = String(denominator).split('');
      const commonDigits = setIntersection(numeratorDigits, denominatorDigits);

      if (isStringArray(commonDigits) && commonDigits.length === 1 && !commonDigits.includes('0')) {
        const canceledNumerator = Number(...setDifference(numeratorDigits, commonDigits));
        const canceledDenominator = Number(...setDifference(denominatorDigits, commonDigits));

        if (canceledNumerator < canceledDenominator) {
          const originalFractionValue = numerator / denominator;
          const canceledFractionValue = canceledNumerator / canceledDenominator;

          if (originalFractionValue === canceledFractionValue) {
            numeratorProduct *= canceledNumerator;
            denominatorProduct *= canceledDenominator;
          }
        }
      }
    }
  }

  answer = denominatorProduct / gcd(numeratorProduct, denominatorProduct);

  return answer;
};

export default solution;
