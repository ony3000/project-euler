const rootPath = require('app-root-path');
const { range } = require('mathjs');

const Stopwatch = require(`${rootPath}/lib/Stopwatch.js`);

class Solution extends Stopwatch {
  execute() {
    let answer = 0;

    const innerNodeCandidates = range(1, 10).toArray();

    for (const firstNode of innerNodeCandidates) {
      for (const secondNode of innerNodeCandidates) {
        for (const thirdNode of innerNodeCandidates) {
          for (const fourthNode of innerNodeCandidates) {
            for (const fifthNode of innerNodeCandidates) {
              const innerNodes = [
                firstNode,
                secondNode,
                thirdNode,
                fourthNode,
                fifthNode,
              ];

              if (new Set(innerNodes).size < 5) {
                continue;
              }

              const magicSum = 10 + firstNode + secondNode;
              const outerNodes = [
                10,
                magicSum - (secondNode + thirdNode),
                magicSum - (thirdNode + fourthNode),
                magicSum - (fourthNode + fifthNode),
                magicSum - (fifthNode + firstNode),
              ];

              if (outerNodes.some((num) => (num < 1 || num > 10))) {
                continue;
              }

              if (new Set([...innerNodes, ...outerNodes]).size < 10) {
                continue;
              }

              let concatenatedString = '';
              const startingIndex = outerNodes.findIndex((value) => (value === Math.min(...outerNodes)));

              for (const index of range(0, 5).toArray()) {
                const currentIndex = (startingIndex + index) % 5;
                const nextIndex = (currentIndex + 1) % 5;

                concatenatedString += String(outerNodes[currentIndex]);
                concatenatedString += String(innerNodes[currentIndex]);
                concatenatedString += String(innerNodes[nextIndex]);
              }

              if (answer < Number(concatenatedString)) {
                answer = Number(concatenatedString);
              }
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
