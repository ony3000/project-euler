const { gcd } = require('mathjs');

const solution = () => {
  let answer = null;

  let maxRatio = 0;

  for (let denominator = 2; denominator <= 1000000; denominator += 1) {
    let maxNumerator = Math.floor((denominator * 3) / 7);

    if (maxNumerator === (denominator * 3) / 7) {
      maxNumerator -= 1;
    }

    for (let numerator = maxNumerator; numerator > 0; numerator -= 1) {
      if (gcd(numerator, denominator) === 1) {
        const ratio = numerator / denominator;

        if (maxRatio < ratio) {
          maxRatio = ratio;
          answer = numerator;
        }

        break;
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
