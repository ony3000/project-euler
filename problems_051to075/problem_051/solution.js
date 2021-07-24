const rootPath = require('app-root-path');
const { isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const primeCountPerPattern = {};
    let num = 9;

    while (answer === null) {
      num += 2;

      if (!isPrime(num)) {
        continue;
      }

      const temp = String(num);
      const uniqueDigits = new Set(temp.slice(0, -1));

      for (const digit of [ ...uniqueDigits ]) {
        const generatingPattern = temp.slice(0, -1).replace(new RegExp(digit, 'g'), '*') + temp.slice(-1);

        if (generatingPattern in primeCountPerPattern) {
          continue;
        }

        let primeCount = 0;

        for (const substitute of '0123456789') {
          const decimal = generatingPattern.replace(/\*/g, substitute);

          if (decimal[0] === '0') {
            continue;
          }

          if (isPrime(Number(decimal))) {
            primeCount += 1;
          }
        }

        if (primeCount === 8) {
          answer = num;
          break;
        }

        primeCountPerPattern[generatingPattern] = primeCount;
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
