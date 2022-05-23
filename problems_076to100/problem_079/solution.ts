import fs from 'fs';
import path from 'path';

import { SolutionFunction, Dictionary } from '@/lib/types';

class Node {
  character: string;

  predecessors: Node[];

  successors: Node[];

  constructor(character: string) {
    this.character = character;
    this.predecessors = [];
    this.successors = [];
  }
}

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = null;

  const source = fs.readFileSync(path.resolve(__dirname, 'keylog.txt'));
  const keylogs = source.toString().trim().split('\n');

  const nodePerKey: Dictionary<Node> = {};

  keylogs.forEach((keylog) => {
    const keys = keylog.trim().split('');

    keys.forEach((character, index) => {
      if (nodePerKey[character] === undefined) {
        nodePerKey[character] = new Node(character);
      }

      if (index > 0) {
        const prevCharacter = keys[index - 1];

        if (!nodePerKey[character].predecessors.includes(nodePerKey[prevCharacter])) {
          nodePerKey[character].predecessors.push(nodePerKey[prevCharacter]);
        }

        if (!nodePerKey[prevCharacter].successors.includes(nodePerKey[character])) {
          nodePerKey[prevCharacter].successors.push(nodePerKey[character]);
        }
      }
    });
  });

  const firstNode = Object.values(nodePerKey).find((node) => node.predecessors.length === 0);
  const lastNode = Object.values(nodePerKey).find((node) => node.successors.length === 0);

  const recursion = (currentNode: Node, checkedNodes: Node[]) => {
    checkedNodes.push(currentNode);

    const checkableNodes = currentNode.successors.filter((node) => !checkedNodes.includes(node));

    if (checkableNodes.length === 0) {
      if (
        currentNode === lastNode
          && Object.values(nodePerKey).every((node) => checkedNodes.includes(node))
      ) {
        const possiblePasscode = checkedNodes.map((node) => node.character).join('');

        if (answer === null || (answer as string).length > possiblePasscode.length) {
          answer = possiblePasscode;
        }
      }

      return;
    }

    checkableNodes.forEach((anotherNode) => {
      recursion(anotherNode, [...checkedNodes]);
    });
  };

  recursion(firstNode as Node, []);

  return answer;
};

export default solution;
