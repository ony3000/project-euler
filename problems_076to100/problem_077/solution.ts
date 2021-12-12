import { isPrime } from 'mathjs';

import { SolutionFunction } from '../../lib/types';
import { numberOfPartitions } from '../../lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const primes = [2];
  let num = 3;

  while (primes.length < 5000) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 2;
  }

  num = 1;

  while (answer === null) {
    const filteredPrimes = primes.filter((prime) => (prime <= num));
    const numberOfPrimePartitions = numberOfPartitions(num, filteredPrimes);

    if (numberOfPrimePartitions > 5000) {
      answer = num;
    }

    num += 1;
  }

  return answer;
};

export default solution;
