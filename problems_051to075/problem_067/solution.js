const fs = require('fs');
const path = require('path');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const source = fs.readFileSync(path.resolve(__dirname, 'triangle.txt'));
    const lines = source.toString().trim().split('\n');
    const triangle = [];

    lines.forEach((line) => {
      triangle.push(line.trim().split(' ').map((x) => Number(x)));
    });

    const partialPathSum = [0, 0];

    for (let i = 0; i < triangle.length; i += 1) {
      const row = triangle[i];

      for (let j = 0; j < row.length; j += 1) {
        const leftPathSum = row[j] + partialPathSum[j];
        const rightPathSum = row[j] + partialPathSum[j + 1];

        row[j] = Math.max(leftPathSum, rightPathSum);
      }

      partialPathSum.splice(1, 0, ...row);
    }

    answer = Math.max(...partialPathSum);

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
