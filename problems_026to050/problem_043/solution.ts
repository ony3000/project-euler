import { SolutionFunction } from '@/lib/types';
import { setDifference, setIsEqual } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const pandigitalSet = '0123456789'.split('');

  const suffixesWithDivisibilityProperty = (initialPrefix: number): string[] => {
    const recursion = (prefix: number, primes: number[]): string[] => {
      if (primes.length === 0) {
        return [];
      }

      const result: string[] = [];
      const [prime] = primes;

      for (let subnumber = 0; subnumber < 1000; subnumber += prime) {
        if (prefix % 100 === Math.floor(subnumber / 10)) {
          const unitsPlace = subnumber % 10;
          const longerPrefix = String(prefix) + String(unitsPlace);

          if (setDifference(longerPrefix.split(''), pandigitalSet).length === 0) {
            const suffixes = recursion(Number(longerPrefix), primes.slice(1));

            if (suffixes.length === 0) {
              result.push(String(unitsPlace));
            }
            else {
              result.push(...suffixes.map((suffix) => String(unitsPlace) + suffix));
            }
          }
        }
      }

      return result;
    };

    return recursion(initialPrefix, [2, 3, 5, 7, 11, 13, 17]);
  };

  for (let prefix = 102; prefix <= 987; prefix += 1) {
    const suffixes = suffixesWithDivisibilityProperty(prefix);

    for (let index = 0; index < suffixes.length; index += 1) {
      const suffix = suffixes[index];
      const decimal = String(prefix) + suffix;

      if (setIsEqual(decimal.split(''), pandigitalSet)) {
        answer += Number(decimal);
      }
    }
  }

  return answer;
};

export default solution;
