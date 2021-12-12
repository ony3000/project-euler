import { SolutionFunction } from '../../lib/types';
import { isPalindrome } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const iterationLimit = 49;

  for (let starter = 1; starter < 10000; starter += 1) {
    let num = starter;
    let iterationCount = 0;

    while (iterationCount < iterationLimit) {
      const reversedNum = Number(String(num).split('').reverse().join(''));

      num += reversedNum;

      if (isPalindrome(String(num))) {
        break;
      }

      iterationCount += 1;
    }

    if (iterationCount === iterationLimit) {
      answer += 1;
    }
  }

  return answer;
};

export default solution;
