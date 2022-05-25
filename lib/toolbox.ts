import { Dict } from './types';
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
function nthLexicographicPermutation(n: number, elements: string[] | undefined = undefined): string {
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
  else if (Array.isArray(elements) && (elements.length === 0 || isStringArray(elements))) {
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

/**
 * 음이 아닌 정수 n에 대해, n을 분할하는 방법의 수를 구한다.
 *
 * 기본적으로는 1부터 n까지의 자연수들로 분할하지만, 임의의 자연수 리스트를 지정할 수도 있다.
 */
function numberOfPartitions(n: number, parts: number[] | undefined = undefined): number {
  if (!Number.isInteger(n)) {
    throw new TypeError('0 또는 양의 정수여야 합니다');
  }

  if (n < 0) {
    throw new RangeError('0 또는 양의 정수여야 합니다');
  }

  let orderedParts: number[] | null = null;

  if (parts === undefined) {
    orderedParts = range(n, 0, -1);
  }
  else if (Array.isArray(parts) && (parts.length === 0 || isNumberArray(parts))) {
    orderedParts = parts.slice().sort((former, latter) => (latter - former));
  }
  else {
    throw new TypeError('자연수 리스트로만 분할 가능합니다');
  }

  const recursion = (num: number, sortedParts: number[]): number => {
    if (num === 0) {
      return 1;
    }

    if (sortedParts.length === 0) {
      return 0;
    }

    if (sortedParts.length === 1) {
      const [largestPart] = sortedParts;

      return (num % largestPart === 0 ? 1 : 0);
    }

    let result = 0;
    const [largestPart] = sortedParts;
    const maxAvailableCount = Math.floor(num / largestPart);

    for (let usedCount = maxAvailableCount; usedCount >= 0; usedCount -= 1) {
      const remainder = num - largestPart * usedCount;

      result += recursion(remainder, sortedParts.slice(1));
    }

    return result;
  };

  return recursion(n, orderedParts);
}

/**
 * 두 배열 또는 두 집합 A, B에 대해, A와 B의 차집합을 구한다.
 */
function setDifference(arrayA: unknown[], arrayB: unknown[]): unknown[];
function setDifference(setA: Set<unknown>, setB: Set<unknown>): Set<unknown>;
function setDifference(arrayOrSetA: unknown[] | Set<unknown>, arrayOrSetB: unknown[] | Set<unknown>): unknown[] | Set<unknown> {
  const recursion = (setA: Set<unknown>, setB: Set<unknown>): Set<unknown> => {
    const difference = new Set(setA);

    for (const element of setB) {
      difference.delete(element);
    }

    return difference;
  };

  if (Array.isArray(arrayOrSetA) && Array.isArray(arrayOrSetB)) {
    return [...recursion(new Set(arrayOrSetA), new Set(arrayOrSetB))];
  }
  else if (arrayOrSetA instanceof Set && arrayOrSetB instanceof Set) {
    return recursion(arrayOrSetA, arrayOrSetB);
  }
  else {
    throw new TypeError('같은 타입의 객체가 아닙니다');
  }
}

/**
 * 두 배열 또는 두 집합 A, B에 대해, A와 B의 교집합을 구한다.
 */
function setIntersection(arrayA: unknown[], arrayB: unknown[]): unknown[];
function setIntersection(setA: Set<unknown>, setB: Set<unknown>): Set<unknown>;
function setIntersection(arrayOrSetA: unknown[] | Set<unknown>, arrayOrSetB: unknown[] | Set<unknown>): unknown[] | Set<unknown> {
  const recursion = (setA: Set<unknown>, setB: Set<unknown>): Set<unknown> => {
    const intersection = new Set();

    for (const element of setB) {
      if (setA.has(element)) {
        intersection.add(element);
      }
    }

    return intersection;
  };

  if (Array.isArray(arrayOrSetA) && Array.isArray(arrayOrSetB)) {
    return [...recursion(new Set(arrayOrSetA), new Set(arrayOrSetB))];
  }
  else if (arrayOrSetA instanceof Set && arrayOrSetB instanceof Set) {
    return recursion(arrayOrSetA, arrayOrSetB);
  }
  else {
    throw new TypeError('같은 타입의 객체가 아닙니다');
  }
}

/**
 * 두 배열 또는 두 집합 A, B에 대해, A와 B의 합집합을 구한다.
 */
function setUnion(arrayA: unknown[], arrayB: unknown[]): unknown[];
function setUnion(setA: Set<unknown>, setB: Set<unknown>): Set<unknown>;
function setUnion(arrayOrSetA: unknown[] | Set<unknown>, arrayOrSetB: unknown[] | Set<unknown>): unknown[] | Set<unknown> {
  const recursion = (setA: Set<unknown>, setB: Set<unknown>): Set<unknown> => {
    const union = new Set(setA);

    for (const element of setB) {
      union.add(element);
    }

    return union;
  };

  if (Array.isArray(arrayOrSetA) && Array.isArray(arrayOrSetB)) {
    return [...recursion(new Set(arrayOrSetA), new Set(arrayOrSetB))];
  }
  else if (arrayOrSetA instanceof Set && arrayOrSetB instanceof Set) {
    return recursion(arrayOrSetA, arrayOrSetB);
  }
  else {
    throw new TypeError('같은 타입의 객체가 아닙니다');
  }
}

/**
 * 문자열 s에 대해, s가 회문인지 판정한다.
 */
function isPalindrome(s: string): boolean {
  if (typeof s !== 'string') {
    throw new TypeError('문자열이 아닙니다');
  }

  let judgment = true;
  const halfLength = Math.floor(s.length / 2);

  for (let index = 0; index < halfLength; index += 1) {
    const frontLetter = s[index];
    const rearLetter = s[s.length - 1 - index];

    if (frontLetter !== rearLetter) {
      judgment = false;
      break;
    }
  }

  return judgment;
}

/**
 * 두 배열 또는 두 집합 A, B에 대해, A가 B의 부분집합인지 판정한다.
 */
function setIsSubset(arrayOrSetA: unknown[] | Set<unknown>, arrayOrSetB: unknown[] | Set<unknown>): boolean {
  const recursion = (setA: Set<unknown>, setB: Set<unknown>): boolean => {
    for (const element of setA) {
      if (!setB.has(element)) {
        return false;
      }
    }

    return true;
  };

  if (Array.isArray(arrayOrSetA) && Array.isArray(arrayOrSetB)) {
    return recursion(new Set(arrayOrSetA), new Set(arrayOrSetB));
  }
  else if (arrayOrSetA instanceof Set && arrayOrSetB instanceof Set) {
    return recursion(arrayOrSetA, arrayOrSetB);
  }
  else {
    throw new TypeError('같은 타입의 객체가 아닙니다');
  }
}

/**
 * 두 배열 또는 두 집합 A, B에 대해, A, B가 '같은' 집합인지 판정한다.
 * 여기서 두 집합이 같다는 것은, 두 집합을 구성하는 원소가 동일함을 의미한다.
 */
function setIsEqual(arrayOrSetA: unknown[] | Set<unknown>, arrayOrSetB: unknown[] | Set<unknown>): boolean {
  const recursion = (setA: Set<unknown>, setB: Set<unknown>): boolean => {
    return setIsSubset(setA, setB) && setIsSubset(setB, setA);
  };

  if (Array.isArray(arrayOrSetA) && Array.isArray(arrayOrSetB)) {
    return recursion(new Set(arrayOrSetA), new Set(arrayOrSetB));
  }
  else if (arrayOrSetA instanceof Set && arrayOrSetB instanceof Set) {
    return recursion(arrayOrSetA, arrayOrSetB);
  }
  else {
    throw new TypeError('같은 타입의 객체가 아닙니다');
  }
}

/**
 * 자연수 n에 대해, n번째 오각수를 구한다.
 */
function nthPentagonalNumber(n: number): number {
  if (!Number.isInteger(n)) {
    throw new TypeError('자연수가 아닙니다');
  }

  if (n <= 0) {
    throw new RangeError('자연수가 아닙니다');
  }

  return (n * (3 * n - 1)) / 2;
}

/**
 * 자연수 n에 대해, n번째 육각수를 구한다.
 */
function nthHexagonalNumber(n: number): number {
  if (!Number.isInteger(n)) {
    throw new TypeError('자연수가 아닙니다');
  }

  if (n <= 0) {
    throw new RangeError('자연수가 아닙니다');
  }

  return n * (2 * n - 1);
}

/**
 * 자연수 p, n에 대해, n번째 p각수를 구한다.
 */
function nthPolygonalNumber(p: number, n: number): number {
  if (!Number.isInteger(p) || !Number.isInteger(n)) {
    throw new TypeError('자연수가 아닙니다');
  }

  if (p <= 0 || n <= 0) {
    throw new RangeError('자연수가 아닙니다');
  }

  if (p === 1) {
    return 1;
  }

  return (n * ((p - 2) * n + (4 - p))) / 2;
}

/**
 * 주어진 값이 삼각수인지 판정한다.
 */
function isTriangleNumber(value: number): boolean {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    return false;
  }

  const probablyBase = Math.floor(Math.sqrt(value * 2));

  return probablyBase > 0 && probablyBase * (probablyBase + 1) / 2 === value;
}

/**
 * 주어진 값이 오각수인지 판정한다.
 */
function isPentagonalNumber(value: number): boolean {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    return false;
  }

  const probablyBase = Math.ceil(Math.sqrt(value * 2 / 3));

  return probablyBase > 0 && probablyBase * (3 * probablyBase - 1) / 2 === value;
}

/**
 * 정수 n에 대해, n을 분할하는 방법의 수를 구한다.
 */
const numberOfIntegerPartitions = (function () {
  const storedResult: Dict<bigint> = {
    0: 1n,
    1: 1n,
  };

  const recursion = (n: number): bigint => {
    if (!Number.isInteger(n)) {
      throw new TypeError('정수가 아닙니다');
    }

    if (n < 0) {
      return 0n;
    }

    if (storedResult[n]) {
      return storedResult[n];
    }

    let result = 0n;
    let index = 1;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const alternatingIndex = (index % 2 === 0 ? index / -2 : (index + 1) / 2);
      const generalizedPentagonalNumber = (3 * (alternatingIndex ** 2) - alternatingIndex) / 2;

      if (n - generalizedPentagonalNumber < 0) {
        break;
      }

      const sign = (Math.floor((index - 1) / 2) % 2 === 0 ? 1n : -1n);

      result += (sign * recursion(n - generalizedPentagonalNumber));

      index += 1;
    }

    storedResult[n] = result;

    return result;
  };

  return recursion;
})();

/**
 * 자연수 n에 대해, n보다 작은 양의 약수의 합을 구한다.
 */
function properDivisorSum(n: number): number {
  if (!Number.isInteger(n)) {
    throw new TypeError('자연수가 아닙니다');
  }

  if (n <= 0) {
    throw new RangeError('자연수가 아닙니다');
  }

  if (n === 1) {
    return 0;
  }

  return sum(positiveDivisors(n).slice(0, -1));
}

/**
 * 음이 아닌 정수 n, d에 대해, n을 d로 나눈 몫을 구한다.
 */
const quotient = (n: number, d: number): number => {
  if (!Number.isInteger(n) || !Number.isInteger(d)) {
    throw new TypeError('0 또는 양의 정수여야 합니다');
  }

  if (n < 0 || d < 0) {
    throw new RangeError('0 또는 양의 정수여야 합니다');
  }

  return Math.floor(n / d);
};

/**
 * 두 수 a, b에 대해, 서로 충분히 가까운지 판정한다.
 */
function isClose(a: number, b: number, tolerance: number = 1e-9): boolean {
  return Math.abs(a - b) < tolerance;
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
  numberOfPartitions,
  setDifference,
  setIntersection,
  setUnion,
  isPalindrome,
  setIsSubset,
  setIsEqual,
  nthPentagonalNumber,
  nthHexagonalNumber,
  nthPolygonalNumber,
  isTriangleNumber,
  isPentagonalNumber,
  numberOfIntegerPartitions,
  properDivisorSum,
  quotient,
  isClose,
};
