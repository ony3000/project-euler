import fs from 'fs';
import path from 'path';

import { SolutionFunction, NumberPair } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const source = fs.readFileSync(path.resolve(__dirname, 'base_exp.txt'));
  const pairs = source.toString().trim().split('\n').map((line): NumberPair => JSON.parse(`[${line.trim()}]`));

  let largestLogValue = 0;

  pairs.forEach(([base, exponent], index) => {
    const logValue = exponent * Math.log(base);

    if (largestLogValue < logValue) {
      largestLogValue = logValue;
      answer = index + 1;
    }
  });

  return answer;
};

export default solution;
