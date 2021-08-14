const rootPath = require('app-root-path');
const { range, setCartesian } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const integers = range(2, 101).valueOf();
    const terms = new Set();

    for (const [a, b] of setCartesian(integers, integers)) {
      terms.add(a ** b);
    }

    answer = terms.size;

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
