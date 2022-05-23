import fs from 'fs';
import path from 'path';

import { SolutionFunction } from '@/lib/types';
import { range, sum } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

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

  const decryptMessage = (asciiCodes: number[], candidateKey: number[]): string => {
    const copyOfCodes = asciiCodes.map((code, index) => {
      const decryptedCharacter = String.fromCharCode(
        // eslint-disable-next-line no-bitwise
        code ^ candidateKey[index % candidateKey.length],
      );

      return decryptedCharacter;
    });

    return copyOfCodes.join('');
  };

  const source = fs.readFileSync(path.resolve(__dirname, 'cipher.txt'));
  const codes: number[] = JSON.parse(`[${source.toString().trim()}]`);

  let maxCount = 0;
  let encryptionKey: number[] = [];
  const baseCode = 'a'.charCodeAt(0);
  const alphabetIndexes = range(0, 26);

  alphabetIndexes.forEach((firstIndex) => {
    alphabetIndexes.forEach((secondIndex) => {
      alphabetIndexes.forEach((thirdIndex) => {
        const candidateKey = [
          baseCode + firstIndex,
          baseCode + secondIndex,
          baseCode + thirdIndex,
        ];

        const decryptedMessage = decryptMessage(codes, candidateKey);
        const matchWordCount = sum(
          commonEnglishWords.map((word) => (decryptedMessage.includes(word) ? 1 : 0)),
        );

        if (maxCount < matchWordCount) {
          maxCount = matchWordCount;
          encryptionKey = candidateKey;
        }
      });
    });
  });

  const plainMessage = decryptMessage(codes, encryptionKey);

  answer = sum(plainMessage.split('').map((letter) => {
    return letter.charCodeAt(0);
  }));

  return answer;
};

export default solution;
