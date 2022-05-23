import { SolutionFunction } from '@/lib/types';
import { range } from '@/lib/toolbox';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const innerNodeCandidates = range(1, 10);

  innerNodeCandidates.forEach((firstNode) => {
    innerNodeCandidates.forEach((secondNode) => {
      innerNodeCandidates.forEach((thirdNode) => {
        innerNodeCandidates.forEach((fourthNode) => {
          innerNodeCandidates.forEach((fifthNode) => {
            const innerNodes = [
              firstNode,
              secondNode,
              thirdNode,
              fourthNode,
              fifthNode,
            ];

            if (new Set(innerNodes).size === 5) {
              const magicSum = 10 + firstNode + secondNode;
              const outerNodes = [
                10,
                magicSum - (secondNode + thirdNode),
                magicSum - (thirdNode + fourthNode),
                magicSum - (fourthNode + fifthNode),
                magicSum - (fifthNode + firstNode),
              ];

              if (outerNodes.every((num) => (num >= 1 && num <= 10))) {
                if (new Set([...innerNodes, ...outerNodes]).size === 10) {
                  let concatenatedString = '';
                  const startingIndex = outerNodes.findIndex(
                    (value) => (value === Math.min(...outerNodes)),
                  );

                  for (let index = 0; index < 5; index += 1) {
                    const currentIndex = (startingIndex + index) % 5;
                    const nextIndex = (currentIndex + 1) % 5;

                    concatenatedString += String(outerNodes[currentIndex]);
                    concatenatedString += String(innerNodes[currentIndex]);
                    concatenatedString += String(innerNodes[nextIndex]);
                  }

                  if (answer === null || answer < Number(concatenatedString)) {
                    answer = Number(concatenatedString);
                  }
                }
              }
            }
          });
        });
      });
    });
  });

  return answer;
};

export default solution;
