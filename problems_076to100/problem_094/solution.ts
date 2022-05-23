import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const maxPerimeter = 1000000000;
  const maxEquilateralSide = Math.floor(maxPerimeter / 3);

  const isAreaInteger = (equilateralSide: number, anotherSide: number): boolean => {
    let result = false;

    const doubleS = equilateralSide * 2 + anotherSide;
    const temp = BigInt(doubleS) * (BigInt(doubleS - equilateralSide * 2) ** 2n) * BigInt(doubleS - anotherSide * 2);

    if (temp % 16n === 0n) {
      const squaredArea = temp / 16n;
      let approximateArea = BigInt(Math.floor(Math.sqrt(Number(squaredArea))));

      while (approximateArea ** 2n <= squaredArea) {
        if (approximateArea ** 2n === squaredArea) {
          result = true;
          break;
        }

        approximateArea += 1n;
      }
    }

    return result;
  };

  for (let equilateralSide = 3; equilateralSide <= maxEquilateralSide; equilateralSide += 2) {
    if (isAreaInteger(equilateralSide, equilateralSide - 1)) {
      answer += equilateralSide * 3 - 1;
    }

    if (isAreaInteger(equilateralSide, equilateralSide + 1)) {
      answer += equilateralSide * 3 + 1;
    }
  }

  return answer;
};

export default solution;
