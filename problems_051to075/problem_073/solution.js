const { gcd } = require('mathjs');

const solution = () => {
  let answer = 0;

  for (let denominator = 2; denominator <= 12000; denominator += 1) {
    let maxNumerator = Math.floor(denominator / 2);

    if (maxNumerator === denominator / 2) {
      maxNumerator -= 1;
    }

    let minNumerator = Math.ceil(denominator / 3);

    if (minNumerator === denominator / 3) {
      minNumerator += 1;
    }

    for (let numerator = minNumerator; numerator <= maxNumerator; numerator += 1) {
      if (gcd(numerator, denominator) === 1) {
        answer += 1;
      }
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
