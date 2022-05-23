import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '@/lib/types';
import { sum, isTriangleNumber } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const source = fs.readFileSync(path.resolve(__dirname, 'words.txt'));
  const names: string[] = JSON.parse(`[${source.toString().trim()}]`);

  answer = sum(names.map((name) => {
    const wordValue = sum(name.split('').map((letter) => (letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1)));

    return isTriangleNumber(wordValue) ? 1 : 0;
  }));

  return answer;
};

export default solution;
