import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '../../lib/types';
import { PokerHand } from '../../lib/classes';
import { sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const source = fs.readFileSync(path.resolve(__dirname, 'poker.txt'));
  const lines = source.toString().trim().split('\n');

  answer = sum(lines.map((line) => {
    const textArray = line.trim().split(' ');

    const firstHands = new PokerHand(textArray.slice(0, 5));
    const secondHands = new PokerHand(textArray.slice(5));

    return firstHands.score() > secondHands.score() ? 1 : 0;
  }));

  return answer;
};

export default solution;
