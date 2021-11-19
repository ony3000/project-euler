const { isPrime } = require('mathjs');

const solution = () => {
  let answer = null;

  let count = 1;
  let num = 3;

  while (answer === null) {
    if (isPrime(num)) {
      count += 1;

      if (count === 10001) {
        answer = num;
        break;
      }
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
