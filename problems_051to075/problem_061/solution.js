const { range, sum } = require('mathjs');

const Stopwatch = require('../../lib/Stopwatch');
const { nthPolygonalNumber } = require('../../lib/toolbox');

class Solution extends Stopwatch {
  execute() {
    let answer = null;

    const polygonalNumbers = {};

    const findCyclicNumbers = (overlappingNumbers, polygonalAngles) => {
      const [lastNumber] = overlappingNumbers.slice(-1);

      for (let angleIndex = 0; angleIndex < polygonalAngles.length; angleIndex += 1) {
        const angle = polygonalAngles[angleIndex];

        for (let index = 0; index < polygonalNumbers[angle].length; index += 1) {
          const num = polygonalNumbers[angle][index];

          if (String(lastNumber).slice(2) === String(num).slice(0, 2)) {
            if (polygonalAngles.length === 1) {
              const firstNumber = overlappingNumbers[0];

              if (String(num).slice(2) === String(firstNumber).slice(0, 2)) {
                return [...overlappingNumbers, num];
              }
            }
            else {
              const otherAngles = polygonalAngles.filter(
                (polygonalAngle) => (polygonalAngle !== angle),
              );
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

    for (let angle = 3; angle <= 8; angle += 1) {
      const limit = Math.ceil(Math.sqrt(20000 / (angle - 2) + 0.25) + 0.5);

      polygonalNumbers[angle] = range(1, limit)
        .toArray()
        .map((n) => nthPolygonalNumber(angle, n))
        .filter((num) => (num >= 10 ** 3 && num < 10 ** 4));
    }

    polygonalNumbers[8].every((num) => {
      const cyclicNumbers = findCyclicNumbers([num], [3, 4, 5, 6, 7]);

      if (cyclicNumbers !== null) {
        answer = sum(cyclicNumbers);
      }

      return (cyclicNumbers === null);
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
