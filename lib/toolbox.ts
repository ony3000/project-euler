import { isNumberArray, isBigIntArray, isStringArray } from './type-guard';

/**
 * 자연수 n에 대해, 1부터 n까지의 합을 구한다.
 */
function naturalSum(n: number): number;
function naturalSum(n: bigint): bigint;
function naturalSum(n: number | bigint): number | bigint {
  if (typeof n === 'number') {
    if (!Number.isInteger(n)) {
      throw new TypeError('자연수가 아닙니다');
    }

    if (n <= 0) {
      throw new RangeError('자연수가 아닙니다');
    }

    return (n * (n + 1)) / 2;
  }
  else if (typeof n === 'bigint') {
    if (n <= 0n) {
      throw new RangeError('자연수가 아닙니다');
    }

    return (n * (n + 1n)) / 2n;
  }
  else {
    throw new TypeError('자연수가 아닙니다');
  }
}

/**
 * 절대값이 1보다 큰 정수 n에 대해, 정수 범위 안에서 소인수분해를 한다.
 */
function primeFactorization(n: number): number[] {
  if (!Number.isInteger(n)) {
    throw new TypeError('정수가 아닙니다');
  }

  if (Math.abs(n) <= 1) {
    throw new RangeError('절대값이 1보다 커야 합니다');
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
 * 임의의 배열에서, 주어진 원소의 개수를 구한다.
 */
function count(arg: unknown[], target: unknown): number {
  if (!Array.isArray(arg)) {
    throw new TypeError('배열이 아닙니다');
  }

  return arg.filter((element) => (element === target)).length;
}

/**
 * 두 정수 시작값, 끝값에 대해, 시작값을 포함하고 끝값은 포함하지 않는 정수 배열을 구한다.
 *
 * 기본적으로 정수 배열의 원소 간격은 1이지만, 임의의 정수를 지정할 수도 있다.
 */
function range(start: number, end: number, step: number = 1): number[] {
  if (!Number.isInteger(start) || !Number.isInteger(end) || !Number.isInteger(step)) {
    throw new TypeError('정수가 아닙니다');
  }

  const rangeLength = Math.max(0, Math.ceil((end - start) / step));

  return Array(rangeLength).fill(null).map((_, index) => (start + step * index));
}

/**
 * 0이 아닌 정수 n에 대해, 정수 범위 안에서 양의 약수를 구한다.
 */
function positiveDivisors(n: number): number[] {
  if (!Number.isInteger(n)) {
    throw new TypeError('정수가 아닙니다');
  }

  if (n === 0) {
    throw new RangeError('0이 아니어야 합니다');
  }

  if (Math.abs(n) === 1) {
    return [1];
  }

  const primeFactors = primeFactorization(n);
  const involutions: number[][] = [];

  while (primeFactors.length > 0) {
    const [base] = primeFactors;
    const baseCount = count(primeFactors, base);

    involutions.push(range(0, baseCount + 1).map((exponent) => (base ** exponent)));
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
      throw new TypeError('같은 타입의 정수가 아닙니다');
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
    throw new TypeError('같은 타입의 정수가 아닙니다');
  }
}

/**
 * 자연수 n에 대해, 1부터 n까지 제곱의 합을 구한다.
 */
function squareSum(n: number): number;
function squareSum(n: bigint): bigint;
function squareSum(n: number | bigint): number | bigint {
  if (typeof n === 'number') {
    if (!Number.isInteger(n)) {
      throw new TypeError('자연수가 아닙니다');
    }

    if (n <= 0) {
      throw new RangeError('자연수가 아닙니다');
    }

    return (n * (n + 1) * (2 * n + 1)) / 6;
  }
  else if (typeof n === 'bigint') {
    if (n <= 0n) {
      throw new RangeError('자연수가 아닙니다');
    }

    return (n * (n + 1n) * (2n * n + 1n)) / 6n;
  }
  else {
    throw new TypeError('자연수가 아닙니다');
  }
}

/**
 * 한 개 이상의 값을 가지는 실수 배열에 대해, 모든 값을 곱한 결과를 구한다.
 */
function prod(numbers: number[]): number;
function prod(numbers: bigint[]): bigint;
function prod(numbers: (number | bigint)[]): number | bigint {
  if (numbers.length === 0) {
    throw new RangeError('배열이 비어있습니다');
  }

  if (isNumberArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }
  else if (isBigIntArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1n);
  }
  else {
    throw new TypeError('수 타입이 아닌 값이 있습니다');
  }
}

/**
 * 한 개 이상의 값을 가지는 실수 배열에 대해, 모든 값을 더한 결과를 구한다.
 */
function sum(numbers: number[]): number;
function sum(numbers: bigint[]): bigint;
function sum(numbers: (number | bigint)[]): number | bigint {
  if (numbers.length === 0) {
    throw new RangeError('배열이 비어있습니다');
  }

  if (isNumberArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  else if (isBigIntArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0n);
  }
  else {
    throw new TypeError('수 타입이 아닌 값이 있습니다');
  }
}

/**
 * 음이 아닌 정수 n에 대해, n의 계승을 구한다.
 */
function factorial(n: number): bigint {
  if (!Number.isInteger(n)) {
    throw new TypeError('0 또는 양의 정수여야 합니다');
  }

  if (n < 0) {
    throw new RangeError('0 또는 양의 정수여야 합니다');
  }

  let result = 1n;

  for (let num = 1; num <= n; num += 1) {
    result *= BigInt(num);
  }

  return result;
}

/**
 * 자연수 n에 대해, n번째 사전식 순열을 구한다.
 *
 * 기본적으로 'a'부터 'z'까지의 문자들을 재배열하지만, 임의의 문자 리스트를 지정할 수도 있다.
 */
function nthLexicographicPermutation(n: number, elements: string[] | undefined): string {
  if (!Number.isInteger(n)) {
    throw new TypeError('자연수가 아닙니다');
  }

  if (n <= 0) {
    throw new RangeError('자연수가 아닙니다');
  }

  let orderedElements: string[] | null = null;

  if (elements === undefined) {
    orderedElements = range(0, 26).map((index) => String.fromCharCode('a'.charCodeAt(0) + index));
  }
  else if (isStringArray(elements)) {
    orderedElements = elements.slice().sort();
  }
  else {
    throw new TypeError('문자 리스트로만 재배열 가능합니다');
  }

  const maxPermutationCount = factorial(orderedElements.length);

  if (n > maxPermutationCount) {
    throw new RangeError(`최대 ${maxPermutationCount}가지 순열이 존재합니다`);
  }

  let result = '';

  if (orderedElements.length) {
    let index = n - 1;

    for (let num = orderedElements.length - 1; num > 0; num -= 1) {
      const permutationCount = Number(factorial(num));
      const quotient = Math.floor(index / permutationCount);

      result += orderedElements[quotient];
      orderedElements.splice(quotient, 1);
      index %= permutationCount;
    }

    result += orderedElements[0];
  }

  return result;
}

export {
  naturalSum,
  primeFactorization,
  count,
  range,
  positiveDivisors,
  gcd,
  squareSum,
  prod,
  sum,
  factorial,
  nthLexicographicPermutation,
};
