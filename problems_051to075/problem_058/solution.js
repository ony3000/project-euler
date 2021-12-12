const { isPrime } = require('mathjs');

const solution = () => {
  let answer = null;

  let numberCount = 1;
  let primeCount = 0;
  let distanceFromOrigin = 0;

  while (answer === null) {
    distanceFromOrigin += 1;

    const currentSquareLength = 2 * distanceFromOrigin + 1;
    const innerSquareLength = currentSquareLength - 2;

    const diagonalGap = currentSquareLength - 1;
    const minDiagonal = innerSquareLength ** 2 + diagonalGap;
    const maxDiagonal = currentSquareLength ** 2;

    numberCount += 4;

    for (let num = minDiagonal; num <= maxDiagonal; num += diagonalGap) {
      if (isPrime(num)) {
        primeCount += 1;
      }
    }

    if (primeCount / numberCount < 0.1) {
      answer = currentSquareLength;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
