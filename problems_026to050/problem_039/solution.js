const solution = () => {
  let answer = null;

  let maxTriangleCount = 0;

  for (let p = 12; p <= 1000; p += 2) {
    let triangleCount = 0;
    const maxA = Math.ceil(p / 3) - 1;

    for (let a = maxA; a > 0; a -= 1) {
      for (let b = a + 1; b < Math.ceil((p - a) / 2); b += 1) {
        const c = p - (a + b);

        if (a ** 2 + b ** 2 === c ** 2) {
          triangleCount += 1;
        }
      }
    }

    if (maxTriangleCount < triangleCount) {
      maxTriangleCount = triangleCount;
      answer = p;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
