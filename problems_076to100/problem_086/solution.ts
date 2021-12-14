import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let M = 1;
  let integerRouteCount = 0;
  let shortestRoute: number | null = null;

  while (answer === null) {
    const length = M;

    for (let width = M; width >= 1; width -= 1) {
      for (let height = width; height >= 1; height -= 1) {
        shortestRoute = Math.sqrt(Math.min(
          length ** 2 + (width + height) ** 2,
          width ** 2 + (height + length) ** 2,
          height ** 2 + (length + width) ** 2,
        ));

        if (Number.isInteger(shortestRoute)) {
          integerRouteCount += 1;
        }
      }
    }

    if (integerRouteCount >= 1000000) {
      answer = M;
      break;
    }

    M += 1;
  }

  return answer;
};

export default solution;
