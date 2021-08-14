const rootPath = require('app-root-path');
const fs = require('fs');
const path = require('path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const decryptMessage = (asciiCodes, candidateKey) => {
      const copyOfCodes = asciiCodes.map((code, index) => {
        // eslint-disable-next-line no-bitwise
        const decryptedCharacter = String.fromCharCode(code ^ candidateKey[index % candidateKey.length]);

        return decryptedCharacter;
      });

      return copyOfCodes.join('');
    };

    /**
     * 출처: https://en.wikipedia.org/wiki/Most_common_words_in_English
     *
     * 많이 사용되는 단어 100개를 글자 수로 구분했을 때, 4글자 단어가 제일 많아서 4글자 단어만 사용하기로 함
     */
    const commonEnglishWords = [
      'that',
      'have',
      'with',
      'this',
      'from',
      'they',
      'will',
      'what',
      'when',
      'make',
      'like',
      'time',
      'just',
      'know',
      'take',
      'into',
      'year',
      'your',
      'good',
      'some',
      'them',
      'than',
      'then',
      'look',
      'only',
      'come',
      'over',
      'also',
      'back',
      'work',
      'well',
      'even',
      'want',
      'give',
      'most',
    ];

    const source = fs.readFileSync(path.resolve(__dirname, 'cipher.txt'));
    const codes = source.toString().trim().split(',').map((code) => Number(code));

    let maxCount = 0;
    let encryptionKey = null;
    const baseCode = 'a'.charCodeAt(0);
    const alphabetIndexes = range(0, 26).toArray();

    for (const firstIndex of alphabetIndexes) {
      for (const secondIndex of alphabetIndexes) {
        for (const thirdIndex of alphabetIndexes) {
          const candidateKey = [
            baseCode + firstIndex,
            baseCode + secondIndex,
            baseCode + thirdIndex,
          ];

          const decryptedMessage = decryptMessage(codes, candidateKey);
          const matchWordCount = sum(commonEnglishWords.map((word) => (decryptedMessage.includes(word) ? 1 : 0)));

          if (maxCount < matchWordCount) {
            maxCount = matchWordCount;
            encryptionKey = candidateKey;
          }
        }
      }
    }

    const plainMessage = decryptMessage(codes, encryptionKey);

    for (const letter of plainMessage) {
      answer += letter.charCodeAt(0);
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  console.log(result);
})();
