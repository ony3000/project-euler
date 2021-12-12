import { isPrime } from 'mathjs';

import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let numberCount = 1;
  let primeCount = 0;
  let distanceFromOrigin = 0;

  while (answer === null) {
    distanceFromOrigin += 1;

    const currentSquareLength = 2 * distanceFromOrigin + 1;
    const innerSquareLength = currentSquareLength - 2;

    const diagonalGap = currentSquareLength - 1;
    const minDiagonal = innerSquareLength ** 2 + diagonalGap;
    const maxDiagonal = currentSquareLength ** 2;

    numberCount += 4;

    for (let num = minDiagonal; num <= maxDiagonal; num += diagonalGap) {
      if (isPrime(num)) {
        primeCount += 1;
      }
    }

    if (primeCount / numberCount < 0.1) {
      answer = currentSquareLength;
    }
  }

  return answer;
};

export default solution;
