import { SolutionFunction } from '../../lib/types';
import { isPalindrome } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = 0;

  for (let num = 1; num < 1000000; num += 1) {
    if (isPalindrome(String(num))) {
      const binaryForm = num.toString(2);

      if (isPalindrome(binaryForm)) {
        answer += num;
      }
    }
  }

  return answer;
};

export default solution;
