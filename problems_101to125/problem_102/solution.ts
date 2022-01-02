import fs from 'fs';
import path from 'path';

import { SolutionFunction, NumberPair } from '../../lib/types';
import { isClose } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const angleBetweenTwoVectors = ([ux, uy]: NumberPair, [vx, vy]: NumberPair): number => {
    const angle = Math.abs(Math.atan2(vy, vx) - Math.atan2(uy, ux));

    return Math.min(angle, 2 * Math.PI - angle);
  };

  const source = fs.readFileSync(path.resolve(__dirname, 'triangles.txt'));
  const coordinates: number[][] = source.toString().trim().split('\n').map((line) => JSON.parse(`[${line.trim()}]`));

  coordinates.forEach(([x0, y0, x1, y1, x2, y2]) => {
    const v0: NumberPair = [x0, y0];
    const v1: NumberPair = [x1, y1];
    const v2: NumberPair = [x2, y2];
    const totalAngle = angleBetweenTwoVectors(v0, v1) + angleBetweenTwoVectors(v1, v2) + angleBetweenTwoVectors(v2, v0);

    if (isClose(totalAngle, 2 * Math.PI)) {
      (answer as number) += 1;
    }
  });

  return answer;
};

export default solution;
