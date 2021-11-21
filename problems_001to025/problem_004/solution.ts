import { SolutionFunction } from '../../lib/types';
import { positiveDivisors } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer = null;

  for (let num = 997; num >= 100; num -= 1) {
    const reversedNum = Number(String(num).split('').reverse().join(''));
    const palindrome = num * 1000 + reversedNum;

    const divisors = positiveDivisors(palindrome);
    const validDivisors = divisors.filter((divisor) => (divisor >= 100 && divisor <= 999));

    const quotients = validDivisors.map((divisor) => (palindrome / divisor));
    const validQuotients = quotients.filter((quotient) => (quotient >= 100 && quotient <= 999));

    if (validQuotients.length > 0) {
      answer = palindrome;
      break;
    }
  }

  return answer;
};

export default solution;
