import { SolutionFunction, Dictionary } from '@/lib/types';
import { sum, factorial } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const lengthPerStarter: Dictionary<number> = {};

  for (let num = 1; num < 1000000; num += 1) {
    let target = num;
    const chain: number[] = [];
    let lengthOfChain: number | null = null;

    while (!chain.includes(target)) {
      chain.push(target);
      target = sum(String(target).split('').map((digit) => Number(factorial(Number(digit)))));

      if (target in lengthPerStarter) {
        lengthOfChain = chain.length + lengthPerStarter[target];
        break;
      }
    }

    if (lengthOfChain === null) {
      lengthOfChain = chain.length;
    }

    lengthPerStarter[num] = lengthOfChain;

    if (lengthOfChain === 60) {
      answer += 1;
    }
  }

  return answer;
};

export default solution;
