import { isNumberArray, isBigIntArray } from './type-guard';

/**
 * 자연수 n에 대해, 1부터 n까지의 합을 구한다.
 */
function naturalSum(n: number): number;
function naturalSum(n: bigint): bigint;
function naturalSum(n: number | bigint): number | bigint {
  if (typeof n === 'number') {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error('자연수가 아닙니다');
    }

    return (n * (n + 1)) / 2;
  }
  else {
    if (n <= 0n) {
      throw new Error('자연수가 아닙니다');
    }

    return (n * (n + 1n)) / 2n;
  }
}

/**
 * 절대값이 1보다 큰 정수 n에 대해, 정수 범위 안에서 소인수분해를 한다.
 */
function primeFactorization(n: number): number[] {
  if (!Number.isInteger(n)) {
    throw new Error('정수가 아닙니다');
  }

  if (Math.abs(n) <= 1) {
    throw new Error('절대값이 1보다 커야 합니다');
  }

  const primeFactors: number[] = [];
  let dividend = Math.abs(n);

  while (dividend > 1) {
    const maxDivisor = Math.floor(Math.sqrt(dividend));
    let isDivisible = false;

    for (let divisor = 2; divisor <= maxDivisor; divisor === 2 ? divisor += 1 : divisor += 2) {
      if (dividend % divisor === 0) {
        isDivisible = true;

        while (dividend % divisor === 0) {
          primeFactors.push(divisor);
          dividend /= divisor;
        }

        break;
      }
    }

    if (!isDivisible) {
      primeFactors.push(dividend);
      break;
    }
  }

  return primeFactors;
}

/**
 * 0이 아닌 정수 n에 대해, 정수 범위 안에서 양의 약수를 구한다.
 */
function positiveDivisors(n: number): number[] {
  if (!Number.isInteger(n)) {
    throw new Error('정수가 아닙니다');
  }

  if (n === 0) {
    throw new Error('0이 아니어야 합니다');
  }

  if (Math.abs(n) === 1) {
    return [1];
  }

  const primeFactors = primeFactorization(n);
  const involutions: number[][] = [];

  while (primeFactors.length > 0) {
    const [base] = primeFactors;
    const baseCount = primeFactors.filter((primeFactor) => (primeFactor === base)).length;

    involutions.push(Array(baseCount + 1).fill(null).map((_, exponent) => (base ** exponent)));
    primeFactors.splice(0, baseCount);
  }

  const orderedDivisors = involutions.reduce((accumulator, currentValue) => {
    const productArray: number[] = [];

    accumulator.forEach((x) => {
      currentValue.forEach((y) => {
        productArray.push(x * y);
      });
    });

    return productArray;
  }, [1]);

  orderedDivisors.sort((former, latter) => (former - latter));

  return orderedDivisors;
}

/**
 * 두 정수 a, b에 대해, 정수 범위 안에서 최대공약수를 구한다.
 */
function gcd(a: number, b: number): number;
function gcd(a: bigint, b: bigint): bigint;
function gcd(a: number | bigint, b: number | bigint): number | bigint {
  if (typeof a === 'number' && typeof b === 'number') {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error('정수가 아닙니다');
    }

    let larger = Math.max(Math.abs(a), Math.abs(b));
    let smaller = Math.min(Math.abs(a), Math.abs(b));

    while (smaller > 0) {
      [larger, smaller] = [smaller, larger % smaller];
    }

    return larger;
  }
  else if (typeof a === 'bigint' && typeof b === 'bigint') {
    let absoluteA = (a > 0n ? a : -a);
    let absoluteB = (b > 0n ? b : -b);

    let larger = (absoluteA > absoluteB ? absoluteA : absoluteB);
    let smaller = (absoluteA < absoluteB ? absoluteA : absoluteB);

    while (smaller > 0n) {
      [larger, smaller] = [smaller, larger % smaller];
    }

    return larger;
  }
  else {
    throw new Error('같은 타입의 정수가 아닙니다');
  }
}

/**
 * 자연수 n에 대해, 1부터 n까지 제곱의 합을 구한다.
 */
function squareSum(n: number): number;
function squareSum(n: bigint): bigint;
function squareSum(n: number | bigint): number | bigint {
  if (typeof n === 'number') {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error('자연수가 아닙니다');
    }

    return (n * (n + 1) * (2 * n + 1)) / 6;
  }
  else {
    if (n <= 0n) {
      throw new Error('자연수가 아닙니다');
    }

    return (n * (n + 1n) * (2n * n + 1n)) / 6n;
  }
}

/**
 * 한 개 이상의 값을 가지는 실수 배열에 대해, 모든 값을 곱한 결과를 구한다.
 */
function prod(numbers: number[]): number;
function prod(numbers: bigint[]): bigint;
function prod(numbers: (number | bigint)[]): number | bigint {
  if (numbers.length === 0) {
    throw new Error('배열이 비어있습니다');
  }

  if (isNumberArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }
  else if (isBigIntArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1n);
  }
  else {
    throw new Error('수 타입이 아닌 값이 있습니다');
  }
}

/**
 * 한 개 이상의 값을 가지는 실수 배열에 대해, 모든 값을 더한 결과를 구한다.
 */
function sum(numbers: number[]): number;
function sum(numbers: bigint[]): bigint;
function sum(numbers: (number | bigint)[]): number | bigint {
  if (numbers.length === 0) {
    throw new Error('배열이 비어있습니다');
  }

  if (isNumberArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  else if (isBigIntArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0n);
  }
  else {
    throw new Error('수 타입이 아닌 값이 있습니다');
  }
}

/**
 * 음이 아닌 정수 n에 대해, n의 계승을 구한다.
 */
function factorial(n: number): bigint {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('0 또는 양의 정수여야 합니다');
  }

  let result = 1n;

  for (let num = 1; num <= n; num += 1) {
    result *= BigInt(num);
  }

  return result;
}

export {
  naturalSum,
  primeFactorization,
  positiveDivisors,
  gcd,
  squareSum,
  prod,
  sum,
  factorial,
};
