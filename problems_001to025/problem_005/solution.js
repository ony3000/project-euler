const { gcd } = require('mathjs');

const solution = () => {
  let answer = 1;

  for (let num = 1; num <= 20; num += 1) {
    answer = (answer * num) / gcd(answer, num);
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
