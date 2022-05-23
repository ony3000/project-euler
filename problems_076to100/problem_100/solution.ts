import { bignumber, floor, sqrt } from 'mathjs';

import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const indexes = [3, 20];

  const nthTriangleNumber = (num: number): bigint => {
    const bignum = BigInt(num);

    return (bignum * (bignum + 1n)) / 2n;
  };

  const isTriangleNumber = (bignum: bigint): boolean => {
    const guessedN = floor(sqrt(bignumber((bignum * 2n).toString()))).toNumber();

    return guessedN > 0 && bignum === nthTriangleNumber(guessedN);
  };

  while (answer === null) {
    const [secondLastIndex, lastIndex] = indexes.slice(-2);
    const nextIndex = 6 * lastIndex - secondLastIndex + 2;

    indexes.push(nextIndex);

    if (nextIndex > 10 ** 12) {
      const evenTriangleNumber = nthTriangleNumber(nextIndex);

      if (isTriangleNumber(evenTriangleNumber / 2n)) {
        const guessedN = floor(sqrt(bignumber(evenTriangleNumber.toString()))).toNumber();
        const blueDiscCount = guessedN + 1;

        answer = blueDiscCount;
      }
    }
  }

  return answer;
};

export default solution;
