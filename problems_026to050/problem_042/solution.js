const fs = require('fs');
const path = require('path');
const { sum } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const source = fs.readFileSync(path.resolve(__dirname, 'words.txt'));
    const names = source.toString().trim().split(',');

    names.forEach((name) => {
      const wordValue = sum(name.slice(1, -1).split('').map((letter) => (letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1)));
      const num = Math.floor(Math.sqrt(wordValue * 2));

      if ((num * (num + 1)) / 2 === wordValue) {
        answer += 1;
      }
    });

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
