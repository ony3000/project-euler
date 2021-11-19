const solution = () => {
  let answer = null;

  for (let a = 332; a > 0; a -= 1) {
    for (let b = a + 1; b < Math.ceil((1000 - a) / 2); b += 1) {
      const c = 1000 - (a + b);

      if (a ** 2 + b ** 2 === c ** 2) {
        answer = a * b * c;
        break;
      }
    }

    if (answer !== null) {
      break;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
