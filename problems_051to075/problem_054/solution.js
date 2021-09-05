const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Card {
  constructor(text) {
    const value = {
      T: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
    const suit = {
      C: 'clubs',
      D: 'diamonds',
      H: 'hearts',
      S: 'spades',
    };

    this.value = (text[0] in value ? value[text[0]] : Number(text[0]));
    this.suit = suit[text[1]];
  }

  toString() {
    return `<${this.value} ${this.suit}>`;
  }
}

class PokerHands {
  constructor(textArray) {
    this.cards = textArray.map((text) => new Card(text));

    const valueCounter = {};
    const suitCounter = {};

    this.cards.forEach((card) => {
      valueCounter[card.value] = (valueCounter[card.value] || 0) + 1;
      suitCounter[card.suit] = (suitCounter[card.suit] || 0) + 1;
    });

    this.valueCounter = Object.entries(valueCounter)
      .sort(([, formerCount], [, latterCount]) => (latterCount - formerCount));
    this.suitCounter = Object.entries(suitCounter)
      .sort(([, formerCount], [, latterCount]) => (latterCount - formerCount));
  }

  score() {
    let result = null;

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

  toString() {
    return this.cards.map((card) => card.toString()).toString();
  }
}

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const source = fs.readFileSync(path.resolve(__dirname, 'poker.txt'));
    const lines = source.toString().trim().split('\n');

    lines.forEach((line) => {
      const textArray = line.trim().split(' ');

      const firstHands = new PokerHands(textArray.slice(0, 5));
      const secondHands = new PokerHands(textArray.slice(5));

      if (firstHands.score() > secondHands.score()) {
        answer += 1;
      }
    });

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
