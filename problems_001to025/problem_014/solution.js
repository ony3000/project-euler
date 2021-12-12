const solution = () => {
  let answer = null;

  let maxSequenceLength = 0;
  const lengthPerStarter = {};

  for (let starter = 1; starter < 1000000; starter += 1) {
    let num = starter;
    let length = 1;

    while (num > 1) {
      if (num % 2 === 0) {
        num /= 2;
      }
      else {
        num = 3 * num + 1;
      }

      if (num in lengthPerStarter) {
        length += lengthPerStarter[num];
        break;
      }
      else {
        length += 1;
      }
    }

    lengthPerStarter[starter] = length;

    if (maxSequenceLength < length) {
      maxSequenceLength = length;
      answer = starter;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
