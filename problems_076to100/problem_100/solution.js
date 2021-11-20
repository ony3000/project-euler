const rootPath = require('app-root-path');
const { bignumber, floor, sqrt } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const nthTriangleNumber = (num) => {
      const bignum = BigInt(num);

      return (bignum * (bignum + 1n)) / 2n;
    };

    const isTriangleNumber = (bignum) => {
      const guessedN = floor(sqrt(bignumber((bignum * 2n).toString()))).toNumber();

      return guessedN > 0 && bignum === nthTriangleNumber(guessedN);
    };

    const indexes = [3, 20];

    while (answer === null) {
      const [secondLastIndex, lastIndex] = indexes.slice(-2);
      const nextIndex = 6 * lastIndex - secondLastIndex + 2;

      indexes.push(nextIndex);

      if (nextIndex > 10 ** 12) {
        const evenTriangleNumber = nthTriangleNumber(nextIndex);

        if (isTriangleNumber(evenTriangleNumber / 2n)) {
          const guessedN = floor(sqrt(bignumber(evenTriangleNumber.toString()))).toNumber();
          const blueDiscCount = guessedN + 1;

          answer = blueDiscCount;
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
