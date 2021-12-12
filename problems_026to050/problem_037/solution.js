const { sum, isPrime } = require('mathjs');

const solution = () => {
  let answer = null;

  const truncatablePrimes = [];
  let num = 11;

  while (truncatablePrimes.length < 11) {
    if (!String(num).includes('0') && !String(num).slice(1).includes('5')) {
      if (isPrime(num)) {
        let isTruncatablePrime = true;
        const temp = String(num);

        for (let index = 1; index < temp.length; index += 1) {
          const leftTruncated = Number(temp.slice(index));
          const rightTruncated = Number(temp.slice(0, index));

          if (!isPrime(leftTruncated) || !isPrime(rightTruncated)) {
            isTruncatablePrime = false;
            break;
          }
        }

        if (isTruncatablePrime) {
          truncatablePrimes.push(num);
        }
      }
    }

    num += 2;
  }

  answer = sum(truncatablePrimes);

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
