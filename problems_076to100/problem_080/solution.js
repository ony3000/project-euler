const rootPath = require('app-root-path');
const { create, all } = require('mathjs');

const {
  bignumber,
  sqrt,
  sum,
  isInteger,
} = create(all, {
  precision: 105,
});

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    for (let num = 1; num <= 100; num += 1) {
      if (!isInteger(sqrt(num))) {
        const squareRootString = sqrt(bignumber(num)).toString();

        answer += sum(squareRootString.replace('.', '').slice(0, 100).split(''));
      }
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
