const rootPath = require('app-root-path');
const { range, sum, isPrime } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const truncatablePrimes = [];
    let num = 11;

    while (truncatablePrimes.length < 11) {
      if (!String(num).includes('0') && !String(num).slice(1).includes('5')) {
        if (isPrime(num)) {
          let isTruncatablePrime = true;
          const temp = String(num);

          for (const index of range(1, temp.length).valueOf()) {
            const leftTruncated = Number(temp.slice(index));
            const rightTruncated = Number(temp.slice(0, index));

            if (!isPrime(leftTruncated) || !isPrime(rightTruncated)) {
              isTruncatablePrime = false;
              break;
            }
          }

          if (isTruncatablePrime) {
            truncatablePrimes.push(num);
          }
        }
      }

      num += 2;
    }

    answer = sum(truncatablePrimes);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
