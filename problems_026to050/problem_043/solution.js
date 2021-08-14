const rootPath = require('app-root-path');
const { range, setDifference } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const pandigitalSet = '0123456789'.split('');

    const suffixesWithDivisibilityProperty = (prefix) => {
      const primes = [2, 3, 5, 7, 11, 13, 17];

      const recursion = (prefix, primes) => {
        if (primes.length === 0) {
          return null;
        }

        const result = [];
        const [prime] = primes;

        for (const subnumber of range(0, 1000, prime).valueOf()) {
          if (prefix % 100 !== Math.floor(subnumber / 10)) {
            continue;
          }

          const unitsPlace = subnumber % 10;
          const longerPrefix = String(prefix) + String(unitsPlace);

          if (setDifference(longerPrefix.split(''), pandigitalSet).length > 0) {
            continue;
          }

          const suffixes = recursion(Number(longerPrefix), primes.slice(1));

          if (suffixes === null) {
            result.push(String(unitsPlace));
          }
          else {
            result.push(...suffixes.map((suffix) => String(unitsPlace) + suffix));
          }
        }

        return result;
      };

      return recursion(prefix, primes);
    };

    for (const prefix of range(102, 987 + 1).valueOf()) {
      const suffixes = suffixesWithDivisibilityProperty(prefix);

      for (const suffix of suffixes) {
        const decimal = String(prefix) + suffix;

        if (setDifference(decimal.split(''), pandigitalSet).length === 0 && setDifference(pandigitalSet, decimal.split('')).length === 0) {
          answer += Number(decimal);
        }
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
