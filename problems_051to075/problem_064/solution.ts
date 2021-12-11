import { SolutionFunction } from '../../lib/types';
import { SquareRootAndInteger, Rational } from '../../lib/classes';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  for (let num = 2; num <= 10000; num += 1) {
    const integerPart = Math.floor(Math.sqrt(num));

    if (integerPart ** 2 !== num) {
      const decimalPart = new Rational(
        new SquareRootAndInteger(num, -integerPart),
        1,
      );
      let lastDecimalPart = decimalPart;
      let period = 0;

      let inverse: Rational | null = null;
      let nextIntegerPart: number | null = null;
      let nextDecimalPart: Rational | null = null;

      while (Number(nextDecimalPart) !== Number(decimalPart)) {
        if (nextDecimalPart !== null) {
          lastDecimalPart = nextDecimalPart;
        }

        period += 1;

        inverse = new Rational(
          lastDecimalPart.denominator,
          lastDecimalPart.numerator,
        );
        nextIntegerPart = Math.floor(Number(inverse));
        nextDecimalPart = new Rational(
          new SquareRootAndInteger(
            (inverse.numerator as SquareRootAndInteger).nonsquarePositiveInteger,
            (inverse.numerator as SquareRootAndInteger).extraInteger - inverse.denominator * nextIntegerPart,
          ),
          inverse.denominator,
        );
      }

      if (period % 2 === 1) {
        answer += 1;
      }
    }
  }

  return answer;
};

export default solution;
