const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const source = fs.readFileSync(path.resolve(__dirname, 'words.txt'));
    const words = JSON.parse(`[${source.toString().trim()}]`);

    const classifiedAnagrams = [];

    words.forEach((word) => {
      const wordLength = word.length;

      if (classifiedAnagrams[wordLength] === undefined) {
        classifiedAnagrams[wordLength] = {};
      }

      const primitive = word.split('').sort().join('');

      if (classifiedAnagrams[wordLength][primitive] === undefined) {
        classifiedAnagrams[wordLength][primitive] = [];
      }

      classifiedAnagrams[wordLength][primitive].push(word);
    });

    classifiedAnagrams.forEach((anagramsPerPrimitive, wordLength) => {
      const minBase = Math.ceil(Math.sqrt(10 ** (wordLength - 1)));
      const maxBase = Math.sqrt(10 ** wordLength);
      const squareNumbers = [];

      Object.values(anagramsPerPrimitive).forEach((anagrams) => {
        if (anagrams.length === 1) {
          return;
        }

        if (squareNumbers.length === 0) {
          for (let num = minBase; num < maxBase; num += 1) {
            squareNumbers.push(num * num);
          }
        }

        const [firstAnagram, ...restAnagrams] = anagrams;

        squareNumbers.forEach((squareNumber) => {
          const squareNumberDigits = String(squareNumber);

          if (firstAnagram.length !== squareNumberDigits.length) {
            return;
          }

          const usedDigitPerLetter = {};
          const usedLetterPerDigit = {};
          let isValidMatching = true;

          firstAnagram.split('').forEach((letter, index) => {
            if (!isValidMatching) {
              return;
            }

            const digit = squareNumberDigits[index];

            if (usedDigitPerLetter[letter] !== undefined || usedLetterPerDigit[digit] !== undefined) {
              isValidMatching = false;
              return;
            }

            usedDigitPerLetter[letter] = digit;
            usedLetterPerDigit[digit] = letter;
          });

          if (!isValidMatching) {
            return;
          }

          restAnagrams.forEach((anagram) => {
            const anagramDigits = anagram.split('').reduce((acc, letter) => acc + usedDigitPerLetter[letter], '');

            if (anagramDigits[0] === '0') {
              return;
            }

            const anagramNumber = Number(anagramDigits);

            if (Math.floor(Math.sqrt(anagramNumber)) ** 2 === anagramNumber) {
              if (answer === null || answer < anagramNumber) {
                answer = anagramNumber;
              }
            }
          });
        });
      });
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
