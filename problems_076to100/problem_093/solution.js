const rootPath = require('app-root-path');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { nthLexicographicPermutation } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const operationSet = '+-*/'.split('');
    let maxExpressibleNumber = 0;

    for (let a = 1; a <= 6; a += 1) {
      for (let b = a + 1; b <= 7; b += 1) {
        for (let c = b + 1; c <= 8; c += 1) {
          for (let d = c + 1; d <= 9; d += 1) {
            const targets = {};
            const digitSet = [a, b, c, d].map((digit) => String(digit));

            for (let digitOrder = 1; digitOrder <= 24; digitOrder += 1) {
              const permutation = nthLexicographicPermutation(digitOrder, digitSet);

              for (let operationOrder = 0; operationOrder < 64; operationOrder += 1) {
                const operations = [
                  operationSet[Math.floor(operationOrder / 16)],
                  operationSet[Math.floor((operationOrder % 16) / 4)],
                  operationSet[(operationOrder % 16) % 4],
                ].join('');

                // eslint-disable-next-line no-eval
                const target = eval(`((${permutation[0]} ${operations[0]} ${permutation[1]}) ${operations[1]} ${permutation[2]}) ${operations[2]} ${permutation[3]}`);

                if (Number.isInteger(target) && target > 0) {
                  targets[target] = true;
                }

                // eslint-disable-next-line no-eval
                const anotherTarget = eval(`(${permutation[0]} ${operations[0]} ${permutation[1]}) ${operations[1]} (${permutation[2]} ${operations[2]} ${permutation[3]})`);

                if (Number.isInteger(anotherTarget) && anotherTarget > 0) {
                  targets[anotherTarget] = true;
                }
              }
            }

            let expressibleNumber = 0;

            for (let num = 1; targets[num] !== undefined; num += 1) {
              expressibleNumber = num;
            }

            if (maxExpressibleNumber < expressibleNumber) {
              maxExpressibleNumber = expressibleNumber;
              answer = digitSet.join('');
            }
          }
        }
      }
    }

    return answer;
  }
}

(() => {
  const solution = new Solution();

  const result = solution.execute();

  // eslint-disable-next-line no-console
  console.log(result);
})();
