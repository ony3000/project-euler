const { sum } = require('mathjs');

const { naturalSum, positiveDivisors } = require('../../lib/toolbox');

const solution = () => {
  let answer = null;

  const abundantNumbers = [];
  const twoAbundantSums = new Set();

  for (let num = 1; num <= 28123; num += 1) {
    const properDivisors = positiveDivisors(num).slice(0, -1);
    const divisorSum = sum(properDivisors);

    if (divisorSum > num) {
      abundantNumbers.push(num);

      abundantNumbers.every((abundant) => {
        const abundantSum = abundant + num;

        if (abundantSum <= 28123) {
          twoAbundantSums.add(abundantSum);
        }

        return abundantSum <= 28123;
      });
    }
  }

  answer = naturalSum(28123) - sum([...twoAbundantSums]);

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
