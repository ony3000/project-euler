const solution = () => {
  let answer = 2;

  let [a, b] = [1n, 1n];

  while (String(b).length < 1000) {
    [a, b] = [b, (a + b)];
    answer += 1;
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
