const solution = () => {
  let answer = 0;

  let numerator = 1n;
  let denominator = 1n;

  for (let num = 0; num < 1000; num += 1) {
    [numerator, denominator] = [(numerator + 2n * denominator), (numerator + denominator)];

    if (String(numerator).length > String(denominator).length) {
      answer += 1;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
