import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  let exponent = 0;

  while (answer === null) {
    const start = 10 ** exponent;
    const end = Math.floor((start * 10) / 6);

    for (let num = start; num <= end; num += 1) {
      let hasSameDigits = true;
      const ascendingDigits = String(num).split('').sort().join('');

      for (let coefficient = 2; coefficient <= 6; coefficient += 1) {
        const anotherAscendingDigits = String(num * coefficient).split('').sort().join('');

        if (ascendingDigits !== anotherAscendingDigits) {
          hasSameDigits = false;
          break;
        }
      }

      if (hasSameDigits) {
        answer = num;
        break;
      }
    }

    exponent += 1;
  }

  return answer;
};

export default solution;
