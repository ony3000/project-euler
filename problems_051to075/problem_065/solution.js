const { sum } = require('mathjs');

const solution = () => {
  let answer = null;

  const reversedSequence = [2];

  for (let order = 2; order <= 100; order += 1) {
    if (order % 3 === 0) {
      const quotient = Math.floor(order / 3);

      reversedSequence.unshift(2 * quotient);
    }
    else {
      reversedSequence.unshift(1);
    }
  }

  let numerator = 0n;
  let denominator = 1n;

  reversedSequence.forEach((term, index) => {
    numerator += BigInt(term) * denominator;

    if (index < reversedSequence.length - 1) {
      [numerator, denominator] = [denominator, numerator];
    }
  });

  answer = sum(String(numerator).split('').map((digit) => Number(digit)));

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
