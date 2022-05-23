import { SolutionFunction } from '@/lib/types';

enum DigitTendency {
  NONE,
  INCREASING,
  DECREASING,
}

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const { NONE, INCREASING, DECREASING } = DigitTendency;
  let num = 1;
  let bouncyCount = 0;

  while (answer === null) {
    let temp = num;
    let tendency = NONE;
    let prevDigit: number | null = null;

    while (temp > 0) {
      const currentDigit = temp % 10;

      if (prevDigit !== null) {
        if (currentDigit < prevDigit) {
          if (tendency === DECREASING) {
            bouncyCount += 1;
            break;
          }

          tendency = INCREASING;
        }
        else if (currentDigit > prevDigit) {
          if (tendency === INCREASING) {
            bouncyCount += 1;
            break;
          }

          tendency = DECREASING;
        }
      }

      prevDigit = currentDigit;
      temp = Math.floor(temp / 10);
    }

    const bouncyRatio = bouncyCount / num;

    if (bouncyRatio === 0.99) {
      answer = num;
      break;
    }

    num += 1;
  }

  return answer;
};

export default solution;
