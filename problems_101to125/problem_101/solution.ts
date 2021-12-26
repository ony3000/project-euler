import { usolve } from 'mathjs';

import { SolutionFunction } from '../../lib/types';
import { sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 1;

  function u(n: number): number {
    return sum([...Array(11)].map((...[, degree]) => ((degree % 2 === 0 ? 1 : -1) * (n ** degree))));
  }

  for (let k = 2; k <= 10; k += 1) {
    const matrix = [...Array(k)].map((...[, rowIndex]) => [...Array(k)].map((...[, columnIndex]) => {
      return (rowIndex + 1) ** columnIndex;
    }));
    const firstTerms = [...Array(k)].map((...[, index]) => u(index + 1));

    // Gaussian elimination
    for (let diagonalIndex = 0; diagonalIndex < k - 1; diagonalIndex += 1) {
      const nonzeroEntry = matrix[diagonalIndex][diagonalIndex];

      for (let rowIndex = diagonalIndex + 1; rowIndex < k; rowIndex += 1) {
        const eliminationTarget = matrix[rowIndex][diagonalIndex];
        const ratio = eliminationTarget / nonzeroEntry;

        for (let columnIndex = 0; columnIndex < k; columnIndex += 1) {
          matrix[rowIndex][columnIndex] -= (matrix[diagonalIndex][columnIndex] * ratio);
        }

        firstTerms[rowIndex] -= firstTerms[diagonalIndex] * ratio;
      }
    }

    const polynomialCoefficients = usolve(matrix, firstTerms);
    const firstIncorrectTerm = sum((polynomialCoefficients as number[][]).map(([coefficient], degree) => (coefficient * ((k + 1) ** degree))));

    answer += firstIncorrectTerm;
  }

  return answer;
};

export default solution;
