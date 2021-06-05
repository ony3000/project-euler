const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');
const { sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const source = fs.readFileSync(path.resolve(__dirname, 'names.txt'));
    const names = source.toString().trim().split(',');

    names.sort();

    names.forEach((name, index) => {
      const order = index + 1;

      name = name.replace(/"/g, '');

      const worth = sum(name.split('').map((letter) => (letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1)));

      answer += order * worth;
    });

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
