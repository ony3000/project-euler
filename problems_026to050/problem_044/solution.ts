import { SolutionFunction } from '../../lib/types';
import { nthPentagonalNumber, isPentagonalNumber } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const pentagonalNumbers: number[] = [];
  let num = 1;

  while (answer === null) {
    const newPentagonal = nthPentagonalNumber(num);

    pentagonalNumbers.push(newPentagonal);

    for (let index = 0; index < pentagonalNumbers.length; index += 1) {
      const existingPentagonal = pentagonalNumbers[index];
      const pentagonalSum = existingPentagonal + newPentagonal;
      const pentagonalDiff = Math.abs(existingPentagonal - newPentagonal);

      if (isPentagonalNumber(pentagonalSum) && isPentagonalNumber(pentagonalDiff)) {
        answer = pentagonalDiff;
        break;
      }
    }

    num += 1;
  }

  return answer;
};

export default solution;
