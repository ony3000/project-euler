import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  for (let a = 3; a <= 1000; a += 1) {
    const aSquare = a ** 2;
    const period = 2 * a;
    let maxRemainder = 0;

    for (let n = 1; n <= period; n += 1) {
      let minusOnePower = 1;
      let plusOnePower = 1;

      for (let exponent = 1; exponent <= n; exponent += 1) {
        minusOnePower = (minusOnePower * (a - 1)) % aSquare;
        plusOnePower = (plusOnePower * (a + 1)) % aSquare;
      }

      const r = (minusOnePower + plusOnePower) % aSquare;

      if (maxRemainder < r) {
        maxRemainder = r;
      }
    }

    answer += maxRemainder;
  }

  return answer;
};

export default solution;
