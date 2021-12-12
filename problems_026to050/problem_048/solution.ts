import { SolutionFunction } from '../../lib/types';
import { range, sum } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  answer = sum(
    range(1, 1001).map((num) => Number((BigInt(num) ** BigInt(num)) % (10n ** 10n))),
  ) % (10 ** 10);

  return answer;
};

export default solution;
