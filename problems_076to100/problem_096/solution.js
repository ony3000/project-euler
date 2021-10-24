const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { quotient, mod } = require(`${rootPath}/lib/toolbox.js`);

const BOARD_SIZE = 9;
const SQUARE_SIZE = 3;
const FITTING_SQUARE_COUNT = BOARD_SIZE / SQUARE_SIZE;

class SudokuCell {
  constructor(id) {
    this.id = id;
    this.relatedRow = null;
    this.relatedColumn = null;
    this.relatedSquare = null;
    this.number = null;
    this.markableStates = Array(BOARD_SIZE + 1).fill(true);
    this.markableStates[0] = null;
  }

  mark(number) {
    if (number < 1 || number > BOARD_SIZE) {
      throw new RangeError();
    }

    this.number = number;
    this.markableStates.forEach((...[, stateIndex]) => {
      if (stateIndex > 0) {
        this.markableStates[stateIndex] = false;
      }
    });
    this.relatedRow.cells.forEach((cell) => cell.eraseMemo(number));
    this.relatedColumn.cells.forEach((cell) => cell.eraseMemo(number));
    this.relatedSquare.cells.forEach((cell) => cell.eraseMemo(number));
  }

  eraseMemo(number) {
    this.markableStates[number] = false;
  }
}

class SudokuRow {
  constructor(id, cells) {
    this.id = id;
    this.cells = cells;
    this.cells.forEach((cell) => {
      // eslint-disable-next-line no-param-reassign
      cell.relatedRow = this;
    });
  }
}

class SudokuColumn {
  constructor(id, cells) {
    this.id = id;
    this.cells = cells;
    this.cells.forEach((cell) => {
      // eslint-disable-next-line no-param-reassign
      cell.relatedColumn = this;
    });
  }
}

class SudokuSquare {
  constructor(id, cells) {
    this.id = id;
    this.cells = cells;
    this.cells.forEach((cell) => {
      // eslint-disable-next-line no-param-reassign
      cell.relatedSquare = this;
    });
  }
}

class SudokuBoard {
  constructor(initialRows) {
    this.cells = Array(BOARD_SIZE * BOARD_SIZE).fill().map((...[, index]) => new SudokuCell(index));
    this.rows = Array(BOARD_SIZE).fill().map((...[, rowIndex]) => new SudokuRow(
      rowIndex,
      this.cells.filter((...[, cellIndex]) => (quotient(cellIndex, BOARD_SIZE) === rowIndex)),
    ));
    this.columns = Array(BOARD_SIZE).fill().map((...[, columnIndex]) => new SudokuColumn(
      columnIndex,
      this.cells.filter((...[, cellIndex]) => (mod(cellIndex, BOARD_SIZE) === columnIndex)),
    ));
    this.squares = Array(FITTING_SQUARE_COUNT ** 2).fill().map((...[, squareIndex]) => new SudokuSquare(
      squareIndex,
      this.cells.filter((...[, cellIndex]) => {
        const rowIndex = quotient(cellIndex, BOARD_SIZE);
        const columnIndex = mod(cellIndex, BOARD_SIZE);

        return quotient(rowIndex, SQUARE_SIZE) * FITTING_SQUARE_COUNT + quotient(columnIndex, SQUARE_SIZE) === squareIndex;
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

    const markPossibleNumberInCell = (cell) => {
      const markingNumber = cell.markableStates.findIndex((isMarkable) => isMarkable);

      cell.mark(markingNumber);
      isUpdated = true;
    };
    const markOnlyNumberInArea = (area) => {
      const markableNumberCount = Array(BOARD_SIZE + 1).fill(0);

      area.cells.forEach((cell) => {
        cell.markableStates.forEach((isMarkable, index) => {
          if (index > 0 && isMarkable) {
            markableNumberCount[index] += 1;
          }
        });
      });

      const markingNumber = markableNumberCount.findIndex((count) => (count === 1));

      if (markingNumber !== -1) {
        area.cells.find((cell) => cell.markableStates[markingNumber]).mark(markingNumber);
        isUpdated = true;
      }
    };
    const eraseMemoFromCell = (cell, number) => {
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
          for (let number = 1; number <= BOARD_SIZE; number += 1) {
            const markableCellCountPerRow = Array(SQUARE_SIZE).fill(0);
            const markableCellCountPerColumn = Array(SQUARE_SIZE).fill(0);

            square.cells.forEach((cell, cellIndex) => {
              if (cell.markableStates[number]) {
                const rowIndex = quotient(cellIndex, SQUARE_SIZE);
                const columnIndex = mod(cellIndex, SQUARE_SIZE);

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
                  .filter((...[, cellIndex]) => (quotient(cellIndex, SQUARE_SIZE) === rowIndex))
                  .forEach((cell) => eraseMemoFromCell(cell, number));
              });
            }

            if (markableCellCountPerColumn.filter((count) => (count > 0)).length === 1) {
              const columnIndex = markableCellCountPerColumn.findIndex((count) => (count > 0));
              const otherSquares = this.squares.filter((anotherSquare, anotherSquareIndex) => {
                const isSameSquare = (anotherSquare === square);
                const hasSameColumns = mod(anotherSquareIndex, FITTING_SQUARE_COUNT) === mod(squareIndex, FITTING_SQUARE_COUNT);

                return (!isSameSquare && hasSameColumns);
              });

              otherSquares.forEach((anotherSquare) => {
                anotherSquare.cells
                  .filter((...[, cellIndex]) => (mod(cellIndex, SQUARE_SIZE) === columnIndex))
                  .forEach((cell) => eraseMemoFromCell(cell, number));
              });
            }
          }
        });
      }

      if (!isUpdated) {
        const partialSolutionBase = this.rows.map((row) => row.cells.map((cell) => cell.number || '0').join('')).join('');
        const guessingSolutions = [];

        for (let squareIndex = 0; squareIndex < this.squares.length; squareIndex += 1) {
          const square = this.squares[squareIndex];
          const markableNumberCount = Array(BOARD_SIZE + 1).fill(0);

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
            const guessingRows = Array(BOARD_SIZE).fill().map((...[, rowIndex]) => {
              const startIndex = rowIndex * BOARD_SIZE;
              const endIndex = (rowIndex + 1) * BOARD_SIZE;

              return guessingSolutions[index].slice(startIndex, endIndex);
            });
            const guessingBoard = new SudokuBoard(guessingRows);

            try {
              guessingBoard.solve();
              this.cells.forEach((cell, cellIndex) => {
                if (cell.number === null) {
                  cell.mark(guessingBoard.cells[cellIndex].number);
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

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const source = fs.readFileSync(path.resolve(__dirname, 'sudoku.txt'));
    const grids = source.toString().trim().split(/Grid [0-9]+\s+/).slice(1)
      .map((grid) => grid.trim());

    grids.forEach((grid) => {
      const rows = grid.split(/\s+/);
      const board = new SudokuBoard(rows);

      board.solve();
      answer += Number(board.cells.slice(0, 3).map((cell) => cell.number).join(''));
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
