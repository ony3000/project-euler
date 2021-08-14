const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

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

    for (const i of range(0, triangle.length).toArray()) {
      const row = triangle[i];

      for (const j of range(0, row.length).toArray()) {
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

  console.log(result);
})();
