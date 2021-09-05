const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const wordPerNumber = {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'hundred',
    };

    for (let num = 1; num < 1000; num += 1) {
      let wordCount = 0;
      const hundredsPlace = Math.floor(num / 100);
      const tensPlace = Math.floor((num % 100) / 10);
      const unitsPlace = num % 10;

      if (hundredsPlace > 0) {
        wordCount += (wordPerNumber[hundredsPlace] + wordPerNumber[100]).length;
      }

      if (tensPlace > 0 || unitsPlace > 0) {
        if (hundredsPlace > 0) {
          wordCount += 'and'.length;
        }

        if (tensPlace < 2) {
          wordCount += wordPerNumber[tensPlace * 10 + unitsPlace].length;
        }
        else {
          wordCount += (wordPerNumber[tensPlace * 10] + wordPerNumber[unitsPlace]).length;
        }
      }

      answer += wordCount;
    }

    answer += 'onethousand'.length;

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
