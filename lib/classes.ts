import { NumberPair, Dictionary } from './types';

class Card {
  value: number;

  suit: string;

  /**
   * 길이가 2 이상인 문자열에 대해, 첫 번째 문자는 카드 숫자를, 두 번째 문자는 카드 무늬를 표현하는 카드 객체를 만든다.
   */
  constructor(text: string) {
    const valueDictionary: Dictionary<number> = {
      T: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
    const suitDictionary: Dictionary<string> = {
      C: 'clubs',
      D: 'diamonds',
      H: 'hearts',
      S: 'spades',
    };
    const [value, suit] = text.split('');
    const allowedDigits = [2, 3, 4, 5, 6, 7, 8, 9];

    if (!(value in valueDictionary) && !allowedDigits.includes(Number(value))) {
      throw new RangeError(`카드 숫자로 사용할 수 없는 값입니다: ${value}`);
    }

    if (!(suit in suitDictionary)) {
      throw new RangeError(`카드 무늬로 사용할 수 없는 값입니다: ${suit}`);
    }

    this.value = (value in valueDictionary ? valueDictionary[value] : Number(value));
    this.suit = suitDictionary[suit];
  }

  toString(): string {
    return `<${this.value} ${this.suit}>`;
  }
}

class PokerHand {
  cards: Card[];

  valueCounter: NumberPair[];

  suitCounter: NumberPair[];

  /**
   * 카드 객체로 표현할 수 있는 문자열로 구성된 배열에 대해, 그 카드들로 구성된 손패 객체를 만든다.
   */
  constructor(textArray: string[]) {
    this.cards = textArray.map((text) => new Card(text));

    const valueCounter: Dictionary<number> = {};
    const suitCounter: Dictionary<number> = {};

    this.cards.forEach((card) => {
      valueCounter[card.value] = (valueCounter[card.value] || 0) + 1;
      suitCounter[card.suit] = (suitCounter[card.suit] || 0) + 1;
    });

    this.valueCounter = Object.entries(valueCounter)
      .map(([key, value]): NumberPair => [Number(key), value])
      .sort(([, formerCount], [, latterCount]) => (latterCount - formerCount));
    this.suitCounter = Object.entries(suitCounter)
      .map(([key, value]): NumberPair => [Number(key), value])
      .sort(([, formerCount], [, latterCount]) => (latterCount - formerCount));
  }

  /**
   * 서로 다른 두 손패의 우위를 비교하기 위해, 카드 조합을 점수화 한다.
   */
  score(): number {
    let result: number | null = null;

    const orderedValues = this.cards
      .map((card) => card.value)
      .sort((former, latter) => (latter - former));
    const highCardValue = orderedValues.reduce(
      (accumulator, currentValue) => (accumulator * 0x10 + currentValue),
      0,
    );
    const [firstMostValue, firstMostValueCount] = this.valueCounter[0];
    const [, secondMostValueCount] = this.valueCounter[1];
    const [, firstMostSuitCount] = this.suitCounter[0];

    const isStraight = (
      firstMostValueCount === 1
        && orderedValues[0] - orderedValues[orderedValues.length - 1] === orderedValues.length - 1
    );
    const isFlush = firstMostSuitCount === 5;
    const baseExponent = 4;
    let extraExponent = 0;

    if (isStraight || isFlush) {
      if (isStraight) {
        extraExponent += 4;
      }
      if (isFlush) {
        extraExponent += 5;
      }

      result = 0x10 ** (baseExponent + extraExponent) * firstMostValue + highCardValue;
    }
    else if (firstMostValueCount > 1) {
      extraExponent += 2 ** (firstMostValueCount - 1) - 1;

      if (secondMostValueCount === 2) {
        extraExponent *= 2;
      }

      result = 0x10 ** (baseExponent + extraExponent) * firstMostValue + highCardValue;
    }
    else {
      result = highCardValue;
    }

    return result;
  }

  toString(): string {
    return this.cards.map((card) => card.toString()).toString();
  }
}

class SquareRootAndInteger {
  nonsquarePositiveInteger: number;

  extraInteger: number;

  /**
   * 제곱수가 아닌 자연수 a와 정수 b에 대해, sqrt(a) + b를 표현하는 객체를 만든다.
   */
  constructor(a: number, b: number) {
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

  /**
   * 정수부의 부호가 반대인 켤레 수를 구한다.
   */
  conjugate(): SquareRootAndInteger {
    return new SquareRootAndInteger(this.nonsquarePositiveInteger, -this.extraInteger);
  }

  toString(): string {
    let innerExpression = `sqrt(${this.nonsquarePositiveInteger})`;

    if (this.extraInteger > 0) {
      innerExpression += `+${this.extraInteger}`;
    }
    else if (this.extraInteger < 0) {
      innerExpression += `${this.extraInteger}`;
    }

    return `<${innerExpression}>`;
  }

  valueOf(): number {
    return Math.sqrt(this.nonsquarePositiveInteger) + this.extraInteger;
  }
}

class Rational {
  numerator: number | SquareRootAndInteger;

  denominator: number;

  /**
   * 두 수에 대해, 첫 번째 수는 분자를, 두 번째 수는 분모를 표현하는 분수 객체를 만든다.
   * 사용할 수 있는 조합은 다음과 같다.
   *
   * - 정수 / 정수
   * - (sqrt(a) + b) / 정수
   * - 정수 / (sqrt(a) + b)
   *
   * 마지막 조합의 경우, 분모가 유리화되어 두 번째 조합과 같은 형태가 된다.
   */
  constructor(numerator: number | SquareRootAndInteger, denominator: number);
  constructor(numerator: number, denominator: number | SquareRootAndInteger);
  constructor(numerator: number | SquareRootAndInteger, denominator: number | SquareRootAndInteger = 1) {
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

  toString(): string {
    let numeratorExpression = String(this.numerator);

    if (this.numerator instanceof SquareRootAndInteger) {
      numeratorExpression = `(${numeratorExpression})`;
    }

    return `<${numeratorExpression}/${this.denominator}>`;
  }

  valueOf(): number {
    return Number(this.numerator) / Number(this.denominator);
  }
}

export {
  Card,
  PokerHand,
  SquareRootAndInteger,
  Rational,
};
