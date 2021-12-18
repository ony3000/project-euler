import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '../../lib/types';
import { SudokuBoard } from '../../lib/classes';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const source = fs.readFileSync(path.resolve(__dirname, 'sudoku.txt'));
  const grids = source.toString().trim().split(/Grid [0-9]+\s+/).slice(1);

  grids.forEach((grid) => {
    const rows = grid.trim().split(/\s+/);
    const board = new SudokuBoard(rows);

    board.solve();
    (answer as number) += Number(board.cells.slice(0, 3).map((cell) => cell.number).join(''));
  });

  return answer;
};

export default solution;
