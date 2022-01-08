import { SolutionFunction } from '../../lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const optimumSet = [11, 18, 19, 20, 22, 25];
  const middleIndex = Math.floor(optimumSet.length / 2);
  const middleElement = optimumSet[middleIndex];
  const nextOptimumSet = [
    middleElement,
    ...optimumSet.map((element) => element + middleElement),
  ];

  // A process of deriving an optimum set from a near optimum set is probably necessary. //

  answer = nextOptimumSet.map((element) => String(element)).join('');

  return answer;
};

export default solution;
