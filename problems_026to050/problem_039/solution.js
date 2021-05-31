const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    let maxTriangleCount = 0;

    for (let p of range(12, 1001, 2).valueOf()) {
      let triangleCount = 0;
      const maxA = Math.ceil(p / 3) - 1;

      for (let a of range(maxA, 0, -1).valueOf()) {
        for (let b of range(a + 1, Math.ceil((p - a) / 2)).valueOf()) {
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
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
