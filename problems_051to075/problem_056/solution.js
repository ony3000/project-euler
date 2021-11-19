const { range, sum } = require('mathjs');

const solution = () => {
  let answer = 0;

  const integers = range(1, 100).toArray();

  integers.forEach((a) => {
    integers.forEach((b) => {
      const num = BigInt(a) ** BigInt(b);
      const sumOfDigits = sum(String(num).split('').map((digit) => Number(digit)));

      if (answer < sumOfDigits) {
        answer = sumOfDigits;
      }
    });
  });

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
