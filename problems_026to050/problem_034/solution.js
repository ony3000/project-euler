const { sum } = require('mathjs');

const { factorial } = require('../../lib/toolbox');

const solution = () => {
  let answer = 0;

  const factorialPerDigit = Array(10).fill(null).map((_, index) => Number(factorial(index)));

  for (let num = 10; num <= 2540160; num += 1) {
    const sumOfFactorials = sum(String(num).split('').map((digit) => factorialPerDigit[digit]));

    if (sumOfFactorials === num) {
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
