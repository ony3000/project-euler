const { nthPentagonalNumber } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  const pentagonalNumbers = [];

  const isPentagonalNumber = (num) => {
    const guessedN = Math.ceil(Math.sqrt((num * 2) / 3));

    return guessedN > 0 && num === nthPentagonalNumber(guessedN);
  };

  let num = 1;

  while (answer === null) {
    const newPentagonal = nthPentagonalNumber(num);

    pentagonalNumbers.push(newPentagonal);

    for (let index = 0; index < pentagonalNumbers.length; index += 1) {
      const existingPentagonal = pentagonalNumbers[index];
      const pentagonalSum = existingPentagonal + newPentagonal;
      const pentagonalDiff = Math.abs(existingPentagonal - newPentagonal);

      if (isPentagonalNumber(pentagonalSum) && isPentagonalNumber(pentagonalDiff)) {
        answer = pentagonalDiff;
        break;
      }
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
