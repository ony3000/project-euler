import { SolutionFunction } from '@/lib/types';
import { primeFactorization, prod } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const radicals = [NaN, 1];

  for (let n = 2; n <= 100000; n += 1) {
    const primeFactors = primeFactorization(n);

    radicals.push(prod([...new Set(primeFactors)]));
  }

  const E = radicals.map((radical, index) => ({
    index,
    radical,
  })).sort((former, latter) => former.radical - latter.radical).map((combined) => combined.index);

  answer = E[10000];

  return answer;
};

export default solution;
