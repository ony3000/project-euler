import { SolutionFunction, Dict } from '@/lib/types';
import { primeFactorization } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let maxRatio = 0;

  for (let num = 2; num <= 1000000; num += 1) {
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

    if (maxRatio < num / phiValue) {
      maxRatio = num / phiValue;
      answer = num;
    }
  }

  return answer;
};

export default solution;
