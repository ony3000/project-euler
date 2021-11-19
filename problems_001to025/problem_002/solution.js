const solution = () => {
  let answer = 0;

  let [a, b] = [1, 2];

  while (b <= 4000000) {
    answer += b;
    [a, b] = [(a + 2 * b), (2 * a + 3 * b)];
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
