import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const isPandigital = (value: string): boolean => {
    const digitArray = Array(10);

    for (let index = 0; index < value.length; index += 1) {
      const digit = value[index];

      if (digit === '0' || digitArray[Number(digit)] !== undefined) {
        return false;
      }

      digitArray[Number(digit)] = digit;
    }

    return true;
  };

  let olderValue = 1n;
  let oldValue = 1n;
  let num = 3;

  while (answer === null) {
    const currentValue = oldValue + olderValue;

    if (currentValue >= 100000000n) {
      const lastNineDigits = String(currentValue % 1000000000n);

      if (isPandigital(lastNineDigits)) {
        const firstNineDigits = String(currentValue).slice(0, 9);

        if (isPandigital(firstNineDigits)) {
          answer = num;
          break;
        }
      }
    }

    [olderValue, oldValue] = [oldValue, currentValue];
    num += 1;
  }

  return answer;
};

export default solution;
