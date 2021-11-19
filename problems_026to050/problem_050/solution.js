const { sum, isPrime } = require('mathjs');

const solution = () => {
  let answer = null;

  const limit = 1000000;
  let n = 0;
  let approximateValue = 0;

  while (approximateValue < limit) {
    n += 1;
    approximateValue = ((n ** 2) * Math.log(n)) / 2;
  }

  const primes = [2];
  let num = 3;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 2;
  }

  for (let length = n; length > 0; length -= 1) {
    for (let startIndex = 0; startIndex <= n - length; startIndex += 1) {
      const endIndex = startIndex + length;
      const consecutiveSum = sum(primes.slice(startIndex, endIndex));

      if (consecutiveSum < limit && isPrime(consecutiveSum)) {
        answer = consecutiveSum;
        break;
      }
    }

    if (answer !== null) {
      break;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
