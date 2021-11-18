const Stopwatch = require('../../lib/Stopwatch');

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const spiralSize = 1001;
    const contourCount = Math.floor((spiralSize + 1) / 2);

    for (let index = 0; index < contourCount; index += 1) {
      if (index === 0) {
        answer += 1;
      }
      else {
        const contourSize = 2 * index + 1;
        const maxInnerNumber = (contourSize - 2) ** 2;

        answer += maxInnerNumber * 4 + (contourSize - 1) * 10;
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
