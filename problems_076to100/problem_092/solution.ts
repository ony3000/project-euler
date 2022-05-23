import { SolutionFunction, Dictionary } from '@/lib/types';
import { sum } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const storedResult: Dictionary<boolean> = {
    1: false,
    89: true,
  };

  for (let startingNumber = 1; startingNumber < 10000000; startingNumber += 1) {
    let num = startingNumber;
    const chain = [num];

    while (storedResult[num] === undefined) {
      num = sum(String(num).split('').map((digit) => Number(digit) ** 2));
      chain.push(num);
    }

    if (storedResult[num]) {
      answer += 1;
    }

    chain.forEach((numberInChain) => {
      storedResult[numberInChain] = storedResult[num];
    });
  }

  return answer;
};

export default solution;
