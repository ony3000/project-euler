const { range } = require('mathjs');

const solution = () => {
  let answer = null;

  const integers = range(2, 101).valueOf();
  const terms = new Set();

  integers.forEach((a) => {
    integers.forEach((b) => {
      terms.add(a ** b);
    });
  });

  answer = terms.size;

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
