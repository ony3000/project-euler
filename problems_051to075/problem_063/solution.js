const solution = () => {
  let answer = null;

  let num = 0;
  const maxBase = 10;
  let minBase = null;
  let baseCount = null;

  while (baseCount !== 0) {
    if (baseCount !== null) {
      answer += baseCount;
    }

    num += 1;
    minBase = Math.ceil(10 ** ((num - 1) / num));
    baseCount = maxBase - minBase;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
