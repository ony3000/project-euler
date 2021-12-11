import { SolutionFunction } from '../../lib/types';
import { SquareRootAndInteger, Rational } from '../../lib/classes';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let maxX = 0n;

  const computeConvergents = (reversedSequence: bigint[]): bigint[] => {
    let numerator = 0n;
    let denominator = 1n;

    reversedSequence.forEach((term, index) => {
      numerator += term * denominator;

      if (index < reversedSequence.length - 1) {
        [numerator, denominator] = [denominator, numerator];
      }
    });

    return [numerator, denominator];
  };

  for (let num = 2; num <= 1000; num += 1) {
    const integerPart = Math.floor(Math.sqrt(num));

    if (integerPart ** 2 !== num) {
      let decimalPart = new Rational(
        new SquareRootAndInteger(num, -integerPart),
        1,
      );
      const reversedSequence = [BigInt(integerPart)];
      let [numerator, denominator] = computeConvergents(reversedSequence);

      while (numerator ** 2n - BigInt(num) * denominator ** 2n !== 1n) {
        const inverse = new Rational(
          decimalPart.denominator,
          decimalPart.numerator,
        );
        const nextIntegerPart = Math.floor(Number(inverse));
        const nextDecimalPart = new Rational(
          new SquareRootAndInteger(
            (inverse.numerator as SquareRootAndInteger).nonsquarePositiveInteger,
            (inverse.numerator as SquareRootAndInteger).extraInteger - inverse.denominator * nextIntegerPart,
          ),
          inverse.denominator,
        );

        reversedSequence.unshift(BigInt(nextIntegerPart));
        [numerator, denominator] = computeConvergents(reversedSequence);
        decimalPart = nextDecimalPart;
      }

      if (maxX < numerator) {
        maxX = numerator;
        answer = num;
      }
    }
  }

  return answer;
};

export default solution;
