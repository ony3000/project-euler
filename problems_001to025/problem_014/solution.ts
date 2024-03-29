import { SolutionFunction, Dict } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let maxSequenceLength = 0;
  const lengthPerStarter: Dict<number> = {};

  for (let starter = 1; starter < 1000000; starter += 1) {
    let num = starter;
    let length = 1;

    while (num > 1) {
      if (num % 2 === 0) {
        num /= 2;
      }
      else {
        num = 3 * num + 1;
      }

      if (num in lengthPerStarter) {
        length += lengthPerStarter[num];
        break;
      }
      else {
        length += 1;
      }
    }

    lengthPerStarter[starter] = length;

    if (maxSequenceLength < length) {
      maxSequenceLength = length;
      answer = starter;
    }
  }

  return answer;
};

export default solution;
