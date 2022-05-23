import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '@/lib/types';
import { sum } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const source = fs.readFileSync(path.resolve(__dirname, 'names.txt'));
  const names: string[] = JSON.parse(`[${source.toString().trim()}]`);

  names.sort();

  answer = sum(names.map((name, index) => {
    const order = index + 1;
    const worth = sum(name.split('').map((letter) => (letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1)));

    return order * worth;
  }));

  return answer;
};

export default solution;
