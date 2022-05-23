import fs from 'fs';
import path from 'path';

import { SolutionFunction, Dictionary } from '@/lib/types';

const solution: SolutionFunction = () => {
  let answer: ReturnType<SolutionFunction> = 0;

  const source = fs.readFileSync(path.resolve(__dirname, 'roman.txt'));
  const romans = source.toString().trim().split('\n').map((line) => line.trim());

  const decimalPerRoman: Dictionary<number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanPerDecimal: Dictionary<string> = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  romans.forEach((roman) => {
    let decimalValue = 0;
    let lastLetter: string | null = null;

    roman.split('').forEach((currentLetter) => {
      if (lastLetter !== null && decimalPerRoman[lastLetter] < decimalPerRoman[currentLetter]) {
        decimalValue -= decimalPerRoman[lastLetter];
        decimalValue += (decimalPerRoman[currentLetter] - decimalPerRoman[lastLetter]);
      }
      else {
        decimalValue += decimalPerRoman[currentLetter];
      }

      lastLetter = currentLetter;
    });

    let minimalForm = '';

    [1000, 100, 10, 1].forEach((unit) => {
      const quotient = Math.floor(decimalValue / unit);

      if (unit === 1000) {
        minimalForm += romanPerDecimal[unit].repeat(quotient);
      }
      else if (quotient % 5 === 4) {
        minimalForm += romanPerDecimal[unit];

        if (quotient >= 5) {
          minimalForm += romanPerDecimal[unit * 10];
        }
        else {
          minimalForm += romanPerDecimal[unit * 5];
        }
      }
      else {
        if (quotient >= 5) {
          minimalForm += romanPerDecimal[unit * 5];
        }

        minimalForm += romanPerDecimal[unit].repeat(quotient % 5);
      }

      decimalValue %= unit;
    });

    (answer as number) += (roman.length - minimalForm.length);
  });

  return answer;
};

export default solution;
