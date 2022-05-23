import { SolutionFunction, Dictionary } from '@/lib/types';
import { properDivisorSum } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = Infinity;

  const upperBound = 1000000;
  const divisorSumPerNumber: Dictionary<number> = {
    0: 0,
  };
  let longestChainLength = 0;

  for (let num = 1; num < upperBound; num += 1) {
    let divisorSum = divisorSumPerNumber[num] === undefined
      ? properDivisorSum(num)
      : divisorSumPerNumber[num];

    divisorSumPerNumber[num] = divisorSum;

    if (divisorSum > 1 && divisorSum < upperBound && divisorSum !== num) {
      const chain = [num, divisorSum];
      let isAmicableChain = true;
      let firstMemberOfChain: number | null = null;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const nextDivisorSum = divisorSumPerNumber[divisorSum] === undefined
          ? properDivisorSum(divisorSum)
          : divisorSumPerNumber[divisorSum];

        if (nextDivisorSum <= 1 || nextDivisorSum >= upperBound) {
          isAmicableChain = false;
          break;
        }

        if (chain.includes(nextDivisorSum)) {
          firstMemberOfChain = nextDivisorSum;
          break;
        }

        if (nextDivisorSum === divisorSum) {
          isAmicableChain = false;
          break;
        }

        divisorSumPerNumber[divisorSum] = nextDivisorSum;
        chain.push(nextDivisorSum);
        divisorSum = nextDivisorSum;
      }

      if (isAmicableChain) {
        const index = chain.findIndex((member) => member === firstMemberOfChain);

        chain.splice(0, index);

        const smallestMember = Math.min(...chain);

        if (longestChainLength < chain.length) {
          longestChainLength = chain.length;
          answer = smallestMember;
        }
        else if (longestChainLength === chain.length) {
          if (answer > smallestMember) {
            answer = smallestMember;
          }
        }
      }
    }
  }

  return answer;
};

export default solution;
