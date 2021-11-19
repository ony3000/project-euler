const { sum } = require('mathjs');

const { positiveDivisors } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  const amicableNumbers = [];
  const divisorSumPerNumber = {
    0: 0,
  };

  for (let num = 1; num < 10000; num += 1) {
    const properDivisors = positiveDivisors(num).slice(0, -1);
    const divisorSum = sum(properDivisors);

    divisorSumPerNumber[num] = divisorSum;

    if (divisorSum < num && divisorSumPerNumber[divisorSum] === num) {
      amicableNumbers.push(num, divisorSum);
    }
  }

  answer = sum(amicableNumbers);

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
