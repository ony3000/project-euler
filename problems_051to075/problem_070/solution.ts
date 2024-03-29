import { SolutionFunction, Dict } from '@/lib/types';
import { primeFactorization } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let minRatio = null;

  for (let num = 2; num < 10 ** 7; num += 1) {
    const primeFactors = primeFactorization(num);
    const counter: Dict<number> = {};

    primeFactors.forEach((prime) => {
      counter[prime] = (counter[prime] || 0) + 1;
    });

    let phiValue = 1;

    Object.entries(counter).forEach(([primeString, exponent]) => {
      const prime = Number(primeString);

      phiValue *= (prime ** (exponent - 1) * (prime - 1));
    });

    if (String(num).split('').sort().join('') === String(phiValue).split('').sort().join('')) {
      if (minRatio === null || minRatio > num / phiValue) {
        minRatio = num / phiValue;
        answer = num;
      }
    }
  }

  return answer;
};

export default solution;
