import { SolutionFunction, Dictionary } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const numberOfFillingWays = (function () {
    const storedResult: Dictionary<number> = {};

    const recursion = (n: number): number => {
      if (n < 3) {
        return 1;
      }

      if (storedResult[n]) {
        return storedResult[n];
      }

      let result = 0;

      // Number of ways NOT to fill the first unit
      result += recursion(n - 1);

      // Number of ways to fill the first unit
      for (let redBlockLength = 3; redBlockLength <= n; redBlockLength += 1) {
        result += recursion(n - (redBlockLength + 1));
      }

      storedResult[n] = result;

      return result;
    };

    return recursion;
  })();

  answer = numberOfFillingWays(50);

  return answer;
};

export default solution;
