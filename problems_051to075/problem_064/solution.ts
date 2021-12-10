import { SolutionFunction, NumberPair } from '../../lib/types';

class CombinedNumber {
  nonsquarePositiveInteger: number;

  extraInteger: number;

  /**
   * 제곱수가 아닌 자연수 a와 정수 b를 받아서, sqrt(a) + b를 표현하는 객체를 만든다
   */
  constructor([a, b]: NumberPair) {
    if (!Number.isInteger(a)) {
      throw new TypeError('자연수가 아닙니다');
    }

    if (a <= 0) {
      throw new RangeError('자연수가 아닙니다');
    }

    if (Number.isInteger(Math.sqrt(a))) {
      throw new RangeError('제곱수가 아니어야 합니다');
    }

    if (!Number.isInteger(b)) {
      throw new TypeError('정수가 아닙니다');
    }

    this.nonsquarePositiveInteger = a;
    this.extraInteger = b;
  }

  conjugate() {
    return new CombinedNumber([this.nonsquarePositiveInteger, -this.extraInteger]);
  }

  toString() {
    let innerExpression = `sqrt(${this.nonsquarePositiveInteger})`;

    if (this.extraInteger >= 0) {
      innerExpression += `+${this.extraInteger}`;
    }
    else {
      innerExpression += `${this.extraInteger}`;
    }

    return `<${innerExpression}>`;
  }

  valueOf() {
    return Math.sqrt(this.nonsquarePositiveInteger) + this.extraInteger;
  }
}

class RationalNumber {
  numerator: number | CombinedNumber;

  denominator: number;

  constructor([numerator, denominator = 1]: [number, number | CombinedNumber] | [number | CombinedNumber, number]) {
    if (typeof denominator === 'number') {
      this.numerator = numerator;
      this.denominator = denominator;
    }
    else if (typeof numerator === 'number') {
      const combined = denominator;
      const { nonsquarePositiveInteger, extraInteger } = combined;

      this.numerator = combined.conjugate();
      this.denominator = (nonsquarePositiveInteger - extraInteger ** 2) / numerator;
    }
    else {
      throw new TypeError('분자와 분모 중 하나는 유리수여야 합니다');
    }
  }

  toString() {
    let numeratorExpression = String(this.numerator);

    if (this.numerator instanceof CombinedNumber) {
      numeratorExpression = `(${numeratorExpression})`;
    }

    return `<${numeratorExpression}/${this.denominator}>`;
  }

  valueOf() {
    return Number(this.numerator) / Number(this.denominator);
  }
}

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  for (let num = 2; num <= 10000; num += 1) {
    const integerPart = Math.floor(Math.sqrt(num));

    if (integerPart ** 2 !== num) {
      const decimalPart = new RationalNumber([
        new CombinedNumber([num, -integerPart]),
        1,
      ]);
      let lastDecimalPart = decimalPart;
      let period = 0;

      let inverse: RationalNumber | null = null;
      let nextIntegerPart: number | null = null;
      let nextDecimalPart: RationalNumber | null = null;

      while (Number(nextDecimalPart) !== Number(decimalPart)) {
        if (nextDecimalPart !== null) {
          lastDecimalPart = nextDecimalPart;
        }

        period += 1;

        inverse = new RationalNumber([
          lastDecimalPart.denominator,
          lastDecimalPart.numerator,
        ]);
        nextIntegerPart = Math.floor(Number(inverse));
        nextDecimalPart = new RationalNumber([
          new CombinedNumber([
            (inverse.numerator as CombinedNumber).nonsquarePositiveInteger,
            (inverse.numerator as CombinedNumber).extraInteger - inverse.denominator * nextIntegerPart,
          ]),
          inverse.denominator,
        ]);
      }

      if (period % 2 === 1) {
        answer += 1;
      }
    }
  }

  return answer;
};

export default solution;
