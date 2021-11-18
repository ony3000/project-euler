const { isPrime } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const primeCountPerPattern = {};
    let num = 9;

    while (answer === null) {
      num += 2;

      if (isPrime(num)) {
        const temp = String(num);
        const uniqueDigits = [...new Set(temp.slice(0, -1))];

        for (let index = 0; index < uniqueDigits.length; index += 1) {
          const digit = uniqueDigits[index];
          const generatingPattern = temp.slice(0, -1).replace(new RegExp(digit, 'g'), '*') + temp.slice(-1);

          if (!(generatingPattern in primeCountPerPattern)) {
            let primeCount = 0;

            '0123456789'.split('').forEach((substitute) => {
              const decimal = generatingPattern.replace(/\*/g, substitute);

              if (decimal[0] !== '0') {
                if (isPrime(Number(decimal))) {
                  primeCount += 1;
                }
              }
            });

            if (primeCount === 8) {
              answer = num;
              break;
            }

            primeCountPerPattern[generatingPattern] = primeCount;
          }
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
