const { setUnion, isPrime } = require('mathjs');

const solution = () => {
  let answer = null;

  const primes = [2];
  let num = 3;

  while (num < 1000000) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 2;
  }

  const filteredPrimes = primes.filter((prime) => !String(prime).includes('0') && !String(prime).includes('5'));
  let circularPrimes = [5];

  filteredPrimes.forEach((prime) => {
    if (!circularPrimes.includes(prime)) {
      let isCircularPrime = true;
      let circularPrimeCandidates = [prime];
      const temp = String(prime);

      for (let index = 1; index < temp.length; index += 1) {
        const rotatedNum = Number(temp.slice(index) + temp.slice(0, index));

        if (isPrime(rotatedNum)) {
          circularPrimeCandidates = setUnion(circularPrimeCandidates, [rotatedNum]);
        }
        else {
          isCircularPrime = false;
          break;
        }
      }

      if (isCircularPrime) {
        circularPrimes = setUnion(circularPrimes, circularPrimeCandidates);
      }
    }
  });

  answer = circularPrimes.length;

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
