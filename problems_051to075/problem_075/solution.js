const rootPath = require('app-root-path');
const { gcd } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { positiveDivisors } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const maxWireLength = 1500000;
    const primitiveLengths = [];

    for (let a = 3; a <= Math.floor(maxWireLength / (2 + Math.sqrt(2))); a += 1) {
      positiveDivisors(a ** 2).every((bcDiff) => {
        if (bcDiff < a && bcDiff % 2 === a % 2) {
          const b = Math.floor((a ** 2 - bcDiff ** 2) / (2 * bcDiff));

          if (a <= b) {
            const c = b + bcDiff;
            const wireLength = a + b + c;

            if (wireLength <= maxWireLength) {
              if (a ** 2 + b ** 2 === c ** 2 && gcd(a, b, c) === 1) {
                primitiveLengths.push(wireLength);
              }
            }
          }
        }

        return (bcDiff < a);
      });
    }

    for (let wireLength = 12; wireLength <= maxWireLength; wireLength += 2) {
      const triangleCount = primitiveLengths.filter(
        (primitiveLength) => (wireLength % primitiveLength === 0),
      ).length;

      if (triangleCount === 1) {
        answer += 1;
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
