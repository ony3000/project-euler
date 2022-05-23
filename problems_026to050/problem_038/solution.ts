import { SolutionFunction } from '@/lib/types';
import { range, setIsEqual } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const pandigitalSet = '123456789'.split('');
  const multiplicandCandidates = [
    1,
    3,
    ...range(5, 10),
    ...range(25, 34),
    ...range(100, 334),
    ...range(5000, 10000),
  ];

  answer = Math.max(...multiplicandCandidates.map((multiplicand) => {
    let concatenatedProduct = '';

    for (let n = 1; n <= 9; n += 1) {
      const product = multiplicand * n;

      concatenatedProduct += String(product);

      if (concatenatedProduct.length === 9) {
        break;
      }
    }

    const productDigitSet = concatenatedProduct.split('');

    return setIsEqual(productDigitSet, pandigitalSet) ? Number(concatenatedProduct) : 0;
  }));

  return answer;
};

export default solution;
