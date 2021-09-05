const rootPath = require('app-root-path');
const { setDifference } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const pandigitalSet = '0123456789'.split('');

    const suffixesWithDivisibilityProperty = (initialPrefix) => {
      const recursion = (prefix, primes) => {
        if (primes.length === 0) {
          return null;
        }

        const result = [];
        const [prime] = primes;

        for (let subnumber = 0; subnumber < 1000; subnumber += prime) {
          if (prefix % 100 === Math.floor(subnumber / 10)) {
            const unitsPlace = subnumber % 10;
            const longerPrefix = String(prefix) + String(unitsPlace);

            if (setDifference(longerPrefix.split(''), pandigitalSet).length === 0) {
              const suffixes = recursion(Number(longerPrefix), primes.slice(1));

              if (suffixes === null) {
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

  // eslint-disable-next-line no-console
  console.log(result);
})();
