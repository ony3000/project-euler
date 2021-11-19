const { range, sum } = require('mathjs');

const solution = () => {
  let answer = null;

  answer = sum(
    range(1, 1001).valueOf().map((num) => Number((BigInt(num) ** BigInt(num)) % (10n ** 10n))),
  ) % (10 ** 10);

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
