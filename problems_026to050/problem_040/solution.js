const solution = () => {
  let answer = 1;

  let num = 1;
  let nextN = 1;
  let digitLength = 0;

  while (digitLength < 1000000) {
    const stringified = String(num);

    digitLength += stringified.length;

    if (digitLength >= nextN) {
      const diff = digitLength - nextN;
      const nthDigit = Number(stringified[stringified.length - (1 + diff)]);

      answer *= nthDigit;
      nextN *= 10;
    }

    num += 1;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
