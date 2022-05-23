import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '@/lib/types';
import { range, sum } from '@/lib/toolbox';

interface SubsetSummary {
  size: number;
  sum: number;
}

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const areDisjointSubsets = (firstSubsetIndex: number, secondSubsetIndex: number): boolean => {
    return ((firstSubsetIndex ^ secondSubsetIndex) & firstSubsetIndex) === firstSubsetIndex;
  };

  const source = fs.readFileSync(path.resolve(__dirname, 'sets.txt'));
  const sets: number[][] = source.toString().trim().split('\n').map((line) => JSON.parse(`[${line.trim()}]`));

  sets.forEach((set) => {
    const subsetSummaries: SubsetSummary[] = [];
    const subsetCount = 2 ** set.length;

    range(0, subsetCount).forEach((subsetIndex) => {
      const binary = subsetIndex.toString(2).padStart(set.length, '0');
      let nonzeroCount = 0;
      let subsetSum = 0;

      set.forEach((element, index) => {
        const elementOrZero = element * Number(binary[index]);

        if (elementOrZero > 0) {
          nonzeroCount += 1;
          subsetSum += elementOrZero;
        }
      });

      subsetSummaries.push({
        size: nonzeroCount,
        sum: subsetSum,
      });
    });

    let isSpecialSumSet = true;

    range(1, subsetCount).forEach((firstSubsetIndex) => {
      if (!isSpecialSumSet) {
        return;
      }

      range(firstSubsetIndex + 1, subsetCount).forEach((secondSubsetIndex) => {
        if (!isSpecialSumSet) {
          return;
        }

        const firstSubset = subsetSummaries[firstSubsetIndex];
        const secondSubset = subsetSummaries[secondSubsetIndex];

        if (areDisjointSubsets(firstSubsetIndex, secondSubsetIndex)) {
          if (
            (firstSubset.sum === secondSubset.sum)
              || (firstSubset.size > secondSubset.size && firstSubset.sum < secondSubset.sum)
              || (firstSubset.size < secondSubset.size && firstSubset.sum > secondSubset.sum)
          ) {
            isSpecialSumSet = false;
          }
        }
      });
    });

    if (isSpecialSumSet) {
      (answer as number) += sum(set);
    }
  });

  return answer;
};

export default solution;
