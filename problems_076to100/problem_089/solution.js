const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const source = fs.readFileSync(path.resolve(__dirname, 'roman.txt'));
    const romans = source.toString().trim().split('\n').map((line) => line.trim());

    const decimalPerRoman = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
    const romanPerDecimal = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M',
    };

    romans.forEach((roman) => {
      let decimalValue = 0;
      let lastLetter = null;

      roman.split('').forEach((currentLetter) => {
        if (lastLetter !== null && decimalPerRoman[lastLetter] < decimalPerRoman[currentLetter]) {
          decimalValue -= decimalPerRoman[lastLetter];
          decimalValue += (decimalPerRoman[currentLetter] - decimalPerRoman[lastLetter]);
        }
        else {
          decimalValue += decimalPerRoman[currentLetter];
        }

        lastLetter = currentLetter;
      });

      let minimalForm = '';

      [1000, 100, 10, 1].forEach((unit) => {
        const quotient = Math.floor(decimalValue / unit);

        if (unit === 1000) {
          minimalForm += romanPerDecimal[unit].repeat(quotient);
        }
        else {
          if (quotient % 5 === 4) {
            minimalForm += romanPerDecimal[unit];

            if (quotient >= 5) {
              minimalForm += romanPerDecimal[unit * 10];
            }
            else {
              minimalForm += romanPerDecimal[unit * 5];
            }
          }
          else {
            if (quotient >= 5) {
              minimalForm += romanPerDecimal[unit * 5];
            }

            minimalForm += romanPerDecimal[unit].repeat(quotient % 5);
          }
        }

        decimalValue %= unit;
      });

      answer += (roman.length - minimalForm.length);
    });

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
