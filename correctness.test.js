require('dotenv').config();

const ProblemCountPerGroup = 25;
const solvedProblemCount = 75;

const solutions = [
  () => {},
];
const answers = [
  '',
];

for (let number = 1; number <= solvedProblemCount; number += 1) {
  const groupNumber = Math.floor((number - 1) / ProblemCountPerGroup) + 1;

  const currentNumber = `00${number}`.slice(-3);
  const firstNumberInGroup = `00${(groupNumber - 1) * ProblemCountPerGroup + 1}`.slice(-3);
  const lastNumberInGroup = `00${groupNumber * ProblemCountPerGroup}`.slice(-3);

  solutions[number] = require(`./problems_${firstNumberInGroup}to${lastNumberInGroup}/problem_${currentNumber}/solution.js`);
  answers[number] = process.env[`PROBLEM_${currentNumber}_ANSWER`];
}

for (let number = 1; number <= solvedProblemCount; number += 1) {
  const solutionFunction = solutions[number];
  const correctAnswer = answers[number];

  test(`Problem #${number}`, () => {
    expect(String(solutionFunction())).toBe(correctAnswer);
  });
}
