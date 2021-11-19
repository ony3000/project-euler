const fs = require('fs');
const path = require('path');
const { sum } = require('mathjs');

const solution = () => {
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
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
