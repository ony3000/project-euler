import { SolutionFunction } from '../../lib/types';
import { nthHexagonalNumber, isTriangleNumber, isPentagonalNumber } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let num = 144;

  while (answer === null) {
    const newHexagonal = nthHexagonalNumber(num);

    if (isTriangleNumber(newHexagonal) && isPentagonalNumber(newHexagonal)) {
      answer = newHexagonal;
      break;
    }

    num += 1;
  }

  return answer;
};

export default solution;
