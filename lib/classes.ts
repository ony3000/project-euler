import { Dict, NumberPair } from './types';
import { quotient } from './toolbox';

class Card {
  value: number;

  suit: string;

  /**
   * 길이가 2 이상인 문자열에 대해, 첫 번째 문자는 카드 숫자를, 두 번째 문자는 카드 무늬를 표현하는 카드 객체를 만든다.
   */
  constructor(text: string) {
    const valueDictionary: Dict<number> = {
      T: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
    const suitDictionary: Dict<string> = {
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

    const valueCounter: Dict<number> = {};
    const suitCounter: Dict<number> = {};

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

const SUDOKU_BOARD_SIZE = 9;
const SUDOKU_SQUARE_SIZE = 3;
const FITTING_SQUARE_COUNT = SUDOKU_BOARD_SIZE / SUDOKU_SQUARE_SIZE;

class SudokuCell {
  id: number;

  relatedRow: SudokuRow | null;

  relatedColumn: SudokuColumn | null;

  relatedSquare: SudokuSquare | null;

  number: number | null;

  markableStates: (boolean | null)[];

  constructor(id: number) {
    this.id = id;
    this.relatedRow = null;
    this.relatedColumn = null;
    this.relatedSquare = null;
    this.number = null;
    this.markableStates = Array(SUDOKU_BOARD_SIZE + 1).fill(true);
    this.markableStates[0] = null;
  }

  mark(number: number) {
    if (number < 1 || number > SUDOKU_BOARD_SIZE) {
      throw new RangeError();
    }

    this.number = number;
    this.markableStates.forEach((...[, stateIndex]) => {
      if (stateIndex > 0) {
        this.markableStates[stateIndex] = false;
      }
    });

    if (this.relatedRow instanceof SudokuRow) {
      this.relatedRow.cells.forEach((cell) => cell.eraseMemo(number));
    }

    if (this.relatedColumn instanceof SudokuColumn) {
      this.relatedColumn.cells.forEach((cell) => cell.eraseMemo(number));
    }

    if (this.relatedSquare instanceof SudokuSquare) {
      this.relatedSquare.cells.forEach((cell) => cell.eraseMemo(number));
    }
  }

  eraseMemo(number: number) {
    this.markableStates[number] = false;
  }
}

class SudokuRow {
  id: number;

  cells: SudokuCell[];

  constructor(id: number, cells: SudokuCell[]) {
    this.id = id;
    this.cells = cells;
    this.cells.forEach((cell) => {
      // eslint-disable-next-line no-param-reassign
      cell.relatedRow = this;
    });
  }
}

class SudokuColumn {
  id: number;

  cells: SudokuCell[];

  constructor(id: number, cells: SudokuCell[]) {
    this.id = id;
    this.cells = cells;
    this.cells.forEach((cell) => {
      // eslint-disable-next-line no-param-reassign
      cell.relatedColumn = this;
    });
  }
}

class SudokuSquare {
  id: number;

  cells: SudokuCell[];

  constructor(id: number, cells: SudokuCell[]) {
    this.id = id;
    this.cells = cells;
    this.cells.forEach((cell) => {
      // eslint-disable-next-line no-param-reassign
      cell.relatedSquare = this;
    });
  }
}

class SudokuBoard {
  cells: SudokuCell[];

  rows: SudokuRow[];

  columns: SudokuColumn[];

  squares: SudokuSquare[];

  constructor(initialRows: string[]) {
    this.cells = Array(SUDOKU_BOARD_SIZE * SUDOKU_BOARD_SIZE).fill(null).map((...[, index]) => new SudokuCell(index));
    this.rows = Array(SUDOKU_BOARD_SIZE).fill(null).map((...[, rowIndex]) => new SudokuRow(
      rowIndex,
      this.cells.filter((...[, cellIndex]) => (quotient(cellIndex, SUDOKU_BOARD_SIZE) === rowIndex)),
    ));
    this.columns = Array(SUDOKU_BOARD_SIZE).fill(null).map((...[, columnIndex]) => new SudokuColumn(
      columnIndex,
      this.cells.filter((...[, cellIndex]) => (cellIndex % SUDOKU_BOARD_SIZE === columnIndex)),
    ));
    this.squares = Array(FITTING_SQUARE_COUNT ** 2).fill(null).map((...[, squareIndex]) => new SudokuSquare(
      squareIndex,
      this.cells.filter((...[, cellIndex]) => {
        const rowIndex = quotient(cellIndex, SUDOKU_BOARD_SIZE);
        const columnIndex = cellIndex % SUDOKU_BOARD_SIZE;

        return quotient(rowIndex, SUDOKU_SQUARE_SIZE) * FITTING_SQUARE_COUNT + quotient(columnIndex, SUDOKU_SQUARE_SIZE) === squareIndex;
      }),
    ));

    initialRows.forEach((row, rowIndex) => {
      const columns = row.split('');

      columns.forEach((digit, columnIndex) => {
        if (digit !== '0') {
          this.rows[rowIndex].cells[columnIndex].mark(Number(digit));
        }
      });
    });
  }

  solve() {
    let isUpdated = true;
    let emptyCell = this.cells.find((cell) => (cell.number === null));
    let sentinel = 0;

    const markPossibleNumberInCell = (cell: SudokuCell) => {
      const markingNumber = cell.markableStates.findIndex((isMarkable) => isMarkable);

      cell.mark(markingNumber);
      isUpdated = true;
    };
    const markOnlyNumberInArea = (area: SudokuRow | SudokuColumn | SudokuSquare) => {
      const markableNumberCount: number[] = Array(SUDOKU_BOARD_SIZE + 1).fill(0);

      area.cells.forEach((cell) => {
        cell.markableStates.forEach((isMarkable, index) => {
          if (index > 0 && isMarkable) {
            markableNumberCount[index] += 1;
          }
        });
      });

      const markingNumber = markableNumberCount.findIndex((count) => (count === 1));

      if (markingNumber !== -1) {
        (area.cells.find((cell) => cell.markableStates[markingNumber]) as SudokuCell).mark(markingNumber);
        isUpdated = true;
      }
    };
    const eraseMemoFromCell = (cell: SudokuCell, number: number) => {
      if (cell.markableStates[number]) {
        cell.eraseMemo(number);
        isUpdated = true;
      }
    };

    while (isUpdated && emptyCell && sentinel < 100) {
      isUpdated = false;

      this.cells
        .filter((cell) => (cell.markableStates.filter((isMarkable) => isMarkable).length === 1))
        .forEach(markPossibleNumberInCell);

      if (!isUpdated) {
        this.rows.forEach(markOnlyNumberInArea);
        this.columns.forEach(markOnlyNumberInArea);
        this.squares.forEach(markOnlyNumberInArea);
      }

      if (!isUpdated) {
        this.squares.forEach((square, squareIndex) => {
          for (let number = 1; number <= SUDOKU_BOARD_SIZE; number += 1) {
            const markableCellCountPerRow: number[] = Array(SUDOKU_SQUARE_SIZE).fill(0);
            const markableCellCountPerColumn: number[] = Array(SUDOKU_SQUARE_SIZE).fill(0);

            square.cells.forEach((cell, cellIndex) => {
              if (cell.markableStates[number]) {
                const rowIndex = quotient(cellIndex, SUDOKU_SQUARE_SIZE);
                const columnIndex = cellIndex % SUDOKU_SQUARE_SIZE;

                markableCellCountPerRow[rowIndex] += 1;
                markableCellCountPerColumn[columnIndex] += 1;
              }
            });

            if (markableCellCountPerRow.filter((count) => (count > 0)).length === 1) {
              const rowIndex = markableCellCountPerRow.findIndex((count) => (count > 0));
              const otherSquares = this.squares.filter((anotherSquare, anotherSquareIndex) => {
                const isSameSquare = (anotherSquare === square);
                const hasSameRows = quotient(anotherSquareIndex, FITTING_SQUARE_COUNT) === quotient(squareIndex, FITTING_SQUARE_COUNT);

                return (!isSameSquare && hasSameRows);
              });

              otherSquares.forEach((anotherSquare) => {
                anotherSquare.cells
                  .filter((...[, cellIndex]) => (quotient(cellIndex, SUDOKU_SQUARE_SIZE) === rowIndex))
                  .forEach((cell) => eraseMemoFromCell(cell, number));
              });
            }

            if (markableCellCountPerColumn.filter((count) => (count > 0)).length === 1) {
              const columnIndex = markableCellCountPerColumn.findIndex((count) => (count > 0));
              const otherSquares = this.squares.filter((anotherSquare, anotherSquareIndex) => {
                const isSameSquare = (anotherSquare === square);
                const hasSameColumns = anotherSquareIndex % FITTING_SQUARE_COUNT === squareIndex % FITTING_SQUARE_COUNT;

                return (!isSameSquare && hasSameColumns);
              });

              otherSquares.forEach((anotherSquare) => {
                anotherSquare.cells
                  .filter((...[, cellIndex]) => (cellIndex % SUDOKU_SQUARE_SIZE === columnIndex))
                  .forEach((cell) => eraseMemoFromCell(cell, number));
              });
            }
          }
        });
      }

      if (!isUpdated) {
        const partialSolutionBase = this.rows.map((row) => row.cells.map((cell) => cell.number || '0').join('')).join('');
        const guessingSolutions: string[] = [];

        for (let squareIndex = 0; squareIndex < this.squares.length; squareIndex += 1) {
          const square = this.squares[squareIndex];
          const markableNumberCount = Array(SUDOKU_BOARD_SIZE + 1).fill(0);

          square.cells.forEach((cell) => {
            cell.markableStates.forEach((isMarkable, index) => {
              if (index > 0 && isMarkable) {
                markableNumberCount[index] += 1;
              }
            });
          });

          markableNumberCount.forEach((count, index) => {
            if (index > 0 && count === 2) {
              square.cells.forEach((cell) => {
                if (cell.markableStates[index]) {
                  guessingSolutions.push(`${partialSolutionBase.slice(0, cell.id)}${index}${partialSolutionBase.slice(cell.id + 1)}`);
                }
              });
            }
          });

          for (let index = 0; index < guessingSolutions.length; index += 1) {
            const guessingRows = Array(SUDOKU_BOARD_SIZE).fill(null).map((...[, rowIndex]) => {
              const startIndex = rowIndex * SUDOKU_BOARD_SIZE;
              const endIndex = (rowIndex + 1) * SUDOKU_BOARD_SIZE;

              return guessingSolutions[index].slice(startIndex, endIndex);
            });
            const guessingBoard = new SudokuBoard(guessingRows);

            try {
              guessingBoard.solve();
              this.cells.forEach((cell, cellIndex) => {
                const guessedNumber = guessingBoard.cells[cellIndex].number;

                if (cell.number === null && typeof guessedNumber === 'number') {
                  cell.mark(guessedNumber);
                }
              });

              return;
            }
            catch (err) {
              // Guessing failed. Nothing to do.
            }
          }
        }
      }

      emptyCell = this.cells.find((cell) => (cell.number === null));
      sentinel += 1;
    }

    if (sentinel >= 100) {
      throw new Error('Prevent Infinite Loop');
    }
  }

  toString() {
    return `[\n${this.rows.map((row) => row.cells.map((cell) => cell.number || '.').join('')).join('\n')}\n]`;
  }
}

export {
  Card,
  PokerHand,
  SquareRootAndInteger,
  Rational,
  SudokuBoard,
};
