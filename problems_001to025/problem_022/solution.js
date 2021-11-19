const fs = require('fs');
const path = require('path');
const { sum } = require('mathjs');

const solution = () => {
  let answer = 0;

  const source = fs.readFileSync(path.resolve(__dirname, 'names.txt'));
  const names = source.toString().trim().split(',');

  names.sort();

  names.forEach((name, index) => {
    const order = index + 1;
    const worth = sum(name.replace(/"/g, '').split('').map((letter) => (letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1)));

    answer += order * worth;
  });

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
