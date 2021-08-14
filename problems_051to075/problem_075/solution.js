const rootPath = require('app-root-path');
const { gcd, range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { positiveDivisors } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const maxWireLength = 1500000;
    const primitiveLengths = [];

    for (const a of range(3, Math.floor(maxWireLength / (2 + Math.sqrt(2))) + 1).toArray()) {
      for (const bcDiff of positiveDivisors(a ** 2)) {
        if (bcDiff >= a) {
          break;
        }

        if (bcDiff % 2 !== a % 2) {
          continue;
        }

        const b = Math.floor((a ** 2 - bcDiff ** 2) / (2 * bcDiff));

        if (a > b) {
          continue;
        }

        const c = b + bcDiff;
        const wireLength = a + b + c;

        if (wireLength > maxWireLength) {
          continue;
        }

        if (a ** 2 + b ** 2 === c ** 2 && gcd(a, b, c) === 1) {
          primitiveLengths.push(wireLength);
        }
      }
    }

    for (const wireLength of range(12, maxWireLength + 1, 2).toArray()) {
      const triangleCount = primitiveLengths.filter((primitiveLength) => (wireLength % primitiveLength === 0)).length;

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
