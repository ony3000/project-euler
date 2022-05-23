import { SolutionFunction, Dictionary } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const LARGEST_DIGIT = 9;
  const SMALLEST_DIGIT = 0;

  const storedCount: Dictionary<number> = {};

  const countIncreasingNumber = (digitLength: number, startingDigit: number): number => {
    if (digitLength < 1 || !Number.isInteger(digitLength)) {
      throw new RangeError('자연수가 아닙니다');
    }

    if (digitLength === 1) {
      return 1;
    }
    else if (digitLength === 2) {
      return (LARGEST_DIGIT - startingDigit + 1);
    }

    const key = `increasing/${digitLength}/${startingDigit}`;

    if (storedCount[key]) {
      return storedCount[key];
    }

    let count = 0;

    for (let digit = startingDigit; digit <= LARGEST_DIGIT; digit += 1) {
      count += countIncreasingNumber(digitLength - 1, digit);
    }

    storedCount[key] = count;

    return count;
  };

  const countDecreasingNumber = (digitLength: number, startingDigit: number): number => {
    if (digitLength < 1 || !Number.isInteger(digitLength)) {
      throw new RangeError('자연수가 아닙니다');
    }

    if (digitLength === 1) {
      return 1;
    }
    else if (digitLength === 2) {
      return (startingDigit - SMALLEST_DIGIT + 1);
    }

    const key = `decreasing/${digitLength}/${startingDigit}`;

    if (storedCount[key]) {
      return storedCount[key];
    }

    let count = 0;

    for (let digit = startingDigit; digit >= SMALLEST_DIGIT; digit -= 1) {
      count += countDecreasingNumber(digitLength - 1, digit);
    }

    storedCount[key] = count;

    return count;
  };

  for (let digitLength = 1; digitLength <= 100; digitLength += 1) {
    let increasingNumberCount = 0;
    let decreasingNumberCount = 0;

    for (let startingDigit = 1; startingDigit <= LARGEST_DIGIT; startingDigit += 1) {
      increasingNumberCount += countIncreasingNumber(digitLength, startingDigit);
      decreasingNumberCount += countDecreasingNumber(digitLength, startingDigit);
    }

    answer += (increasingNumberCount + decreasingNumberCount - 9);
  }

  return answer;
};

export default solution;
