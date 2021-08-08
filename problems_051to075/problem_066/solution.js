const rootPath = require('app-root-path');
const { range, isInteger } = require('mathjs');

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
    let answer = null;

    let maxX = 0;

    const computeConvergents = (reversedSequence) => {
      let numerator = 0n;
      let denominator = 1n;

      reversedSequence.forEach((term, index) => {
        numerator += term * denominator;

        if (index < reversedSequence.length - 1) {
          [ numerator, denominator ] = [ denominator, numerator ];
        }
      });

      return [numerator, denominator];
    };

    for (const num of range(2, 1001).toArray()) {
      const integerPart = Math.floor(Math.sqrt(num));

      if (integerPart ** 2 === num) {
        continue;
      }

      let decimalPart = new RationalNumber(
        new CombinedNumber(num, -integerPart),
        1,
      );
      const reversedSequence = [BigInt(integerPart)];
      let [ numerator, denominator ] = computeConvergents(reversedSequence);

      while (numerator ** 2n - BigInt(num) * denominator ** 2n !== 1n) {
        const inverse = new RationalNumber(
          decimalPart.denominator,
          decimalPart.numerator,
        );
        const nextIntegerPart = Math.floor(Number(inverse));
        const nextDecimalPart = new RationalNumber(
          new CombinedNumber(
            inverse.numerator.nonsquarePositiveInteger,
            inverse.numerator.extraInteger - inverse.denominator * nextIntegerPart,
          ),
          inverse.denominator,
        );

        reversedSequence.unshift(BigInt(nextIntegerPart));
        [ numerator, denominator ] = computeConvergents(reversedSequence);
        decimalPart = nextDecimalPart;
      }

      if (maxX < numerator) {
        maxX = numerator;
        answer = num;
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
