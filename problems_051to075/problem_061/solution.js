const rootPath = require('app-root-path');
const { range, sum } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);
const { nthPolygonalNumber } = require(`${rootPath}/lib/toolbox.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const polygonalNumbers = {};

    const findCyclicNumbers = (overlappingNumbers, polygonalAngles) => {
      const [lastNumber] = overlappingNumbers.slice(-1);

      for (const angle of polygonalAngles) {
        for (const num of polygonalNumbers[angle]) {
          if (String(lastNumber).slice(2) === String(num).slice(0, 2)) {
            if (polygonalAngles.length === 1) {
              const firstNumber = overlappingNumbers[0];

              if (String(num).slice(2) === String(firstNumber).slice(0, 2)) {
                return [...overlappingNumbers, num];
              }
            }
            else {
              const otherAngles = polygonalAngles.filter((polygonalAngle) => (polygonalAngle !== angle));
              const cyclicNumbers = findCyclicNumbers([...overlappingNumbers, num], otherAngles);

              if (cyclicNumbers !== null) {
                return cyclicNumbers;
              }
            }
          }
        }
      }

      return null;
    };

    for (const angle of range(3, 9).toArray()) {
      const limit = Math.ceil(Math.sqrt(20000 / (angle - 2) + 0.25) + 0.5);

      polygonalNumbers[angle] = range(1, limit)
        .toArray()
        .map((n) => nthPolygonalNumber(angle, n))
        .filter((num) => (num >= 10 ** 3 && num < 10 ** 4));
    }

    for (const num of polygonalNumbers[8]) {
      const cyclicNumbers = findCyclicNumbers([num], [3, 4, 5, 6, 7]);

      if (cyclicNumbers !== null) {
        answer = sum(cyclicNumbers);
        break;
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
