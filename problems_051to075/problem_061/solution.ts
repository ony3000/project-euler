import { SolutionFunction, Dictionary } from '@/lib/types';
import { range, sum, nthPolygonalNumber } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const polygonalNumbers: Dictionary<number[]> = {};

  const findCyclicNumbers = (overlappingNumbers: number[], polygonalAngles: number[]): number[] => {
    const [lastNumber] = overlappingNumbers.slice(-1);

    for (let angleIndex = 0; angleIndex < polygonalAngles.length; angleIndex += 1) {
      const angle = polygonalAngles[angleIndex];

      for (let index = 0; index < polygonalNumbers[angle].length; index += 1) {
        const num = polygonalNumbers[angle][index];

        if (String(lastNumber).slice(2) === String(num).slice(0, 2)) {
          if (polygonalAngles.length === 1) {
            const firstNumber = overlappingNumbers[0];

            if (String(num).slice(2) === String(firstNumber).slice(0, 2)) {
              return [...overlappingNumbers, num];
            }
          }
          else {
            const otherAngles = polygonalAngles.filter(
              (polygonalAngle) => (polygonalAngle !== angle),
            );
            const cyclicNumbers = findCyclicNumbers([...overlappingNumbers, num], otherAngles);

            if (cyclicNumbers.length) {
              return cyclicNumbers;
            }
          }
        }
      }
    }

    return [];
  };

  for (let angle = 3; angle <= 8; angle += 1) {
    const limit = Math.ceil(Math.sqrt(20000 / (angle - 2) + 0.25) + 0.5);

    polygonalNumbers[angle] = range(1, limit)
      .map((n) => nthPolygonalNumber(angle, n))
      .filter((num) => (num >= 10 ** 3 && num < 10 ** 4));
  }

  polygonalNumbers[8].every((num) => {
    const cyclicNumbers = findCyclicNumbers([num], [3, 4, 5, 6, 7]);

    if (cyclicNumbers.length) {
      answer = sum(cyclicNumbers);
    }

    return (cyclicNumbers.length === 0);
  });

  return answer;
};

export default solution;
