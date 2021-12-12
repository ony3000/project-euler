const { isPrime } = require('mathjs');

const solution = () => {
  let answer = null;

  let num = 9;

  while (answer === null) {
    if (!isPrime(num)) {
      let isWritableAsSum = false;
      const baseLimit = Math.floor(Math.sqrt((num - 3) / 2));

      for (let squareBase = 1; squareBase <= baseLimit; squareBase += 1) {
        if (isPrime(num - 2 * squareBase ** 2)) {
          isWritableAsSum = true;
          break;
        }
      }

      if (!isWritableAsSum) {
        answer = num;
        break;
      }
    }

    num += 2;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
