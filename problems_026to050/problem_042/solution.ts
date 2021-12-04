import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '../../lib/types';
import { sum, isTriangleNumber } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = 0;

  const source = fs.readFileSync(path.resolve(__dirname, 'words.txt'));
  const names: string[] = JSON.parse(`[${source.toString().trim()}]`);

  names.forEach((name) => {
    const wordValue = sum(name.split('').map((letter) => (letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1)));

    if (isTriangleNumber(wordValue)) {
      answer += 1;
    }
  });

  return answer;
};

export default solution;
