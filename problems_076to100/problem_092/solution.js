const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const storedResult = {
      1: false,
      89: true,
    };

    for (let startingNumber = 1; startingNumber < 10000000; startingNumber += 1) {
      let num = startingNumber;
      const chain = [num];

      while (storedResult[num] === undefined) {
        num = String(num).split('').reduce((a, b) => a + b ** 2, 0);
        chain.push(num);
      }

      if (storedResult[num]) {
        answer += 1;
      }

      chain.forEach((numberInChain) => {
        storedResult[numberInChain] = storedResult[num];
      });
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
