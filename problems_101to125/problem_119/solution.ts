import { SolutionFunction } from '../../lib/types';
import { sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const terms: bigint[] = [];
  let temporaryTerms: bigint[] = [];
  let digitLength = 2;
  let exponent: number | null = null;
  let lowerBoundOfBase: number | null = null;
  let upperBoundOfBase: number | null = null;

  while (terms.length < 30) {
    exponent = 2;
    lowerBoundOfBase = Math.ceil(Math.max(1, 10 ** ((digitLength - 1) / exponent)));
    upperBoundOfBase = Math.floor(Math.min(9 * digitLength, 10 ** (digitLength / exponent)));

    while (upperBoundOfBase > 1) {
      for (let base = lowerBoundOfBase; base <= upperBoundOfBase; base += 1) {
        const power = BigInt(base) ** BigInt(exponent);
        const digitSum = sum(String(power).split('').map((letter) => Number(letter)));

        if (digitSum === base) {
          temporaryTerms.push(power);
        }
      }

      exponent += 1;
      lowerBoundOfBase = Math.ceil(Math.max(1, 10 ** ((digitLength - 1) / exponent)));
      upperBoundOfBase = Math.floor(Math.min(9 * digitLength, 10 ** (digitLength / exponent)));
    }

    temporaryTerms.sort((former, latter) => Number(former - latter));
    terms.push(...temporaryTerms);
    temporaryTerms = [];
    digitLength += 1;
  }

  answer = String(terms[29]);

  return answer;
};

export default solution;
