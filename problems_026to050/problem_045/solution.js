const {
  nthTriangleNumber,
  nthPentagonalNumber,
  nthHexagonalNumber,
} = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  const isTriangleNumber = (num) => {
    const guessedN = Math.floor(Math.sqrt(num * 2));

    return guessedN > 0 && num === nthTriangleNumber(guessedN);
  };

  const isPentagonalNumber = (num) => {
    const guessedN = Math.ceil(Math.sqrt((num * 2) / 3));

    return guessedN > 0 && num === nthPentagonalNumber(guessedN);
  };

  let num = 144;

  while (answer === null) {
    const newHexagonal = nthHexagonalNumber(num);

    if (isTriangleNumber(newHexagonal) && isPentagonalNumber(newHexagonal)) {
      answer = newHexagonal;
      break;
    }

    num += 1;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
