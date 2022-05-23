import { SolutionFunction } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const criterion = 2000000;
  let sizeLimit: number | null = null;
  let minDifference: number | null = null;

  const calculateInnerRectangle = (outerRowSize: number, outerColumnSize: number): number => {
    let result = 0;

    for (let innerRowSize = 1; innerRowSize <= outerRowSize; innerRowSize += 1) {
      for (let innerColumnSize = 1; innerColumnSize <= outerColumnSize; innerColumnSize += 1) {
        result += (outerRowSize - innerRowSize + 1) * (outerColumnSize - innerColumnSize + 1);
      }
    }

    return result;
  };

  for (let rowSize = 1; sizeLimit === null || rowSize <= sizeLimit; rowSize += 1) {
    for (let columnSize = 1; sizeLimit === null || columnSize <= sizeLimit; columnSize += 1) {
      const numberOfRectangles = calculateInnerRectangle(rowSize, columnSize);
      const difference = Math.abs(numberOfRectangles - criterion);

      if (minDifference === null || minDifference > difference) {
        minDifference = difference;
        answer = rowSize * columnSize;
      }

      if (numberOfRectangles > criterion) {
        if (sizeLimit === null) {
          sizeLimit = columnSize;
        }

        break;
      }
    }
  }

  return answer;
};

export default solution;
