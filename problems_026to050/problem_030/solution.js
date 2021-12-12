const { sum } = require('mathjs');

const solution = () => {
  let answer = 0;

  for (let num = 10; num <= 354294; num += 1) {
    const sumOfPowers = sum(String(num).split('').map((digit) => Number(digit) ** 5));

    if (sumOfPowers === num) {
      answer += num;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
