const path = require('path');
const dotenv = require('dotenv');
const solution = require('../problems_001to025/problem_001/solution');

dotenv.config();

test('Correctness Check', () => {
  expect(String(solution()))
    .toBe(process.env[`${path.basename(__filename, '.js')}_answer`.toUpperCase()]);
});
