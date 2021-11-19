const solution = () => {
  let answer = null;

  const permutationDict = {};
  let num = 0;

  while (answer === null) {
    num += 1;

    const cubeNum = num ** 3;
    const oneOfPermutations = String(cubeNum).split('').sort().join('');

    if (oneOfPermutations in permutationDict) {
      permutationDict[oneOfPermutations].push(num);
    }
    else {
      permutationDict[oneOfPermutations] = [num];
    }

    if (permutationDict[oneOfPermutations].length === 5) {
      answer = permutationDict[oneOfPermutations][0] ** 3;
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
