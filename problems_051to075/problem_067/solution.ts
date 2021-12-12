import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const source = fs.readFileSync(path.resolve(__dirname, 'triangle.txt'));
  const triangle: number[][] = source.toString().trim().split('\n').map((row) => row.trim().split(' ').map((num) => Number(num)));

  const partialPathSum = [0, 0];

  for (let i = 0; i < triangle.length; i += 1) {
    const row = triangle[i];

    for (let j = 0; j < row.length; j += 1) {
      const leftPathSum = row[j] + partialPathSum[j];
      const rightPathSum = row[j] + partialPathSum[j + 1];

      row[j] = Math.max(leftPathSum, rightPathSum);
    }

    partialPathSum.splice(1, 0, ...row);
  }

  answer = Math.max(...partialPathSum);

  return answer;
};

export default solution;
