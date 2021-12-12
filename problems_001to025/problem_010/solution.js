const { isPrime } = require('mathjs');

const solution = () => {
  let answer = 2;

  let num = 3;

  while (num < 2000000) {
    if (isPrime(num)) {
      answer += num;
    }

    num += 2;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
