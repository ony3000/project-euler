import dotenv from 'dotenv';

dotenv.config();

const ProblemCountPerGroup = 25;
const solvedProblemCount = 80;

for (let number = 1; number <= solvedProblemCount; number += 1) {
  const groupNumber = Math.floor((number - 1) / ProblemCountPerGroup) + 1;

  const currentNumber = `00${number}`.slice(-3);
  const firstNumberInGroup = `00${(groupNumber - 1) * ProblemCountPerGroup + 1}`.slice(-3);
  const lastNumberInGroup = `00${groupNumber * ProblemCountPerGroup}`.slice(-3);

  test(`Problem #${number}`, async () => {
    const modulePath = `./problems_${firstNumberInGroup}to${lastNumberInGroup}/problem_${currentNumber}/solution.ts`;
    const { default: solutionFunction } = await import(modulePath);
    const correctAnswer = process.env[`PROBLEM_${currentNumber}_ANSWER`];

    expect(String(solutionFunction())).toBe(correctAnswer);
  });
}