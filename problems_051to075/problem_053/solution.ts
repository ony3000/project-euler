import { SolutionFunction } from '../../lib/types';
import { factorial } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  for (let n = 1; n <= 100; n += 1) {
    const half = Math.floor(n / 2);

    for (let r = 0; r <= half; r += 1) {
      const binomialCoefficient = factorial(n) / (factorial(r) * factorial(n - r));

      if (binomialCoefficient > 1000000) {
        if (r < n / 2) {
          answer += 2;
        }
        else {
          answer += 1;
        }
      }
    }
  }

  return answer;
};

export default solution;
