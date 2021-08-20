const rootPath = require('app-root-path');
const { isInteger } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class CombinedNumber {
  constructor(nonsquarePositiveInteger, extraInteger) {
    if (!isInteger(nonsquarePositiveInteger) || nonsquarePositiveInteger <= 0) {
      throw new Error('자연수가 아닙니다');
    }

    if (isInteger(Math.sqrt(nonsquarePositiveInteger))) {
      throw new Error('제곱수가 아니어야 합니다');
    }

    if (!isInteger(extraInteger)) {
      throw new Error('정수가 아닙니다');
    }

    this.nonsquarePositiveInteger = nonsquarePositiveInteger;
    this.extraInteger = extraInteger;
  }

  conjugate() {
    return new CombinedNumber(this.nonsquarePositiveInteger, -this.extraInteger);
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
  constructor(numerator, denominator = 1) {
    this.numerator = numerator;
    this.denominator = denominator;

    if (denominator instanceof CombinedNumber) {
      const combined = denominator;

      this.numerator = combined.conjugate();
      this.denominator = (combined.nonsquarePositiveInteger - combined.extraInteger ** 2) / numerator;
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

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (let num = 2; num <= 10000; num += 1) {
      const integerPart = Math.floor(Math.sqrt(num));

      if (integerPart ** 2 !== num) {
        const decimalPart = new RationalNumber(
          new CombinedNumber(num, -integerPart),
          1,
        );
        let lastDecimalPart = decimalPart;
        let period = 0;

        let inverse = null;
        let nextIntegerPart = null;
        let nextDecimalPart = null;

        while (Number(nextDecimalPart) !== Number(decimalPart)) {
          if (nextDecimalPart !== null) {
            lastDecimalPart = nextDecimalPart;
          }

          period += 1;

          inverse = new RationalNumber(
            lastDecimalPart.denominator,
            lastDecimalPart.numerator,
          );
          nextIntegerPart = Math.floor(Number(inverse));
          nextDecimalPart = new RationalNumber(
            new CombinedNumber(
              inverse.numerator.nonsquarePositiveInteger,
              inverse.numerator.extraInteger - inverse.denominator * nextIntegerPart,
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
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
