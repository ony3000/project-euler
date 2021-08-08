const { isInteger } = require('mathjs');

if (Array.prototype.count === undefined) {
  Array.prototype.count = function count(target) {
    return this.filter((element) => (element === target)).length;
  };
}

/**
 * 자연수 n에 대해, 1부터 n까지의 합을 구한다.
 * @param {number} n
 */
const naturalSum = (n) => {
  if (!isInteger(n) || n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  return n * (n + 1) / 2;
};

/**
 * 절대값이 1보다 큰 정수 n에 대해, 정수 범위 안에서 소인수분해를 한다.
 * @param {number} n
 */
const primeFactorization = (n) => {
  if (!isInteger(n)) {
    throw new Error('정수가 아닙니다');
  }

  if (Math.abs(n) <= 1) {
    throw new Error('절대값이 1보다 커야 합니다');
  }

  const primeFactors = [];
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
};

/**
 * 0이 아닌 정수 n에 대해, 정수 범위 안에서 양의 약수를 구한다.
 * @param {number} n
 */
const positiveDivisors = (n) => {
  if (!isInteger(n)) {
    throw new Error('정수가 아닙니다');
  }

  if (n === 0) {
    throw new Error('0이 아니어야 합니다');
  }

  if (Math.abs(n) === 1) {
    return [1];
  }

  const primeFactors = primeFactorization(n);
  const involutions = [];

  while (primeFactors.length > 0) {
    const [ base ] = primeFactors;
    const baseCount = primeFactors.count(base);

    involutions.push(Array(baseCount + 1).fill(null).map((_, exponent) => (base ** exponent)));
    primeFactors.splice(0, baseCount);
  }

  const orderedDivisors = involutions.reduce((accumulator, currentValue) => {
    const productArray = [];

    for (let x of accumulator) {
      for (let y of currentValue) {
        productArray.push(x * y);
      }
    }

    return productArray;
  }, [1]);

  orderedDivisors.sort((former, latter) => (former - latter));

  return orderedDivisors;
};

/**
 * 자연수 n에 대해, 1부터 n까지 제곱의 합을 구한다.
 * @param {number} n
 */
const squareSum = (n) => {
  if (!isInteger(n) || n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  return n * (n + 1) * (2 * n + 1) / 6;
};

/**
 * 음이 아닌 정수 n에 대해, n의 계승을 구한다.
 * @param {number} n
 */
const factorial = (n) => {
  if (!isInteger(n) || n < 0) {
    throw new Error('0 또는 양의 정수여야 합니다');
  }

  if (n === 0) {
    return 1n;
  }

  let result = 1n;

  for (let num = 1; num <= n; num += 1) {
    result *= BigInt(num);
  }

  return result;
};

/**
 * 자연수 n에 대해, n번째 사전식 순열을 구한다.
 *
 * 기본적으로는 'a'부터 'z'까지의 문자들을 재배열하지만, 임의의 문자 리스트를 지정할 수도 있다.
 * @param {number} n
 * @param {string[]} elements
 */
const nthLexicographicPermutation = (n, elements) => {
  if (!isInteger(n) || n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  if (elements === undefined) {
    elements = Array(26).fill(null).map((_, index) => String.fromCharCode('a'.charCodeAt(0) + index));
  }
  else if (elements.constructor !== Array) {
    throw new Error('배열이 아닙니다');
  }
  else {
    if (elements.some((element) => (typeof element !== 'string'))) {
      throw new Error('문자로만 재배열 가능합니다');
    }

    elements = elements.slice().sort();
  }

  const maxOrder = factorial(elements.length);

  if (n > maxOrder) {
    throw new Error(`최대 ${maxOrder}가지 순열이 존재합니다`);
  }

  if (elements.length === 0) {
    return null;
  }

  let result = '';
  let index = n - 1;

  for (let num = elements.length - 1; num > 0; num -= 1) {
    const permutationCount = Number(factorial(num));
    const quotient = Math.floor(index / permutationCount);

    result += elements[quotient];
    elements.splice(quotient, 1);
    index %= permutationCount;
  }

  result += elements[0];

  return result;
};

/**
 * 음이 아닌 정수 n에 대해, n을 분할하는 방법의 수를 구한다.
 *
 * 기본적으로는 1부터 n까지의 자연수들로 분할하지만, 임의의 자연수 리스트를 지정할 수도 있다.
 * @param {number} n
 * @param {number[]} parts
 */
const numberOfPartitions = (n, parts) => {
  if (!isInteger(n) || n < 0) {
    throw new Error('0 또는 양의 정수여야 합니다');
  }

  if (parts === undefined) {
    parts = Array(n).fill(null).map((_, index) => (n - index));
  }
  else if (parts.constructor !== Array) {
    throw new Error('배열이 아닙니다');
  }
  else {
    if (parts.some((part) => (typeof part !== 'number' || !isInteger(part) || part <= 0))) {
      throw new Error('자연수로만 분할 가능합니다');
    }

    parts = parts.slice().sort((former, latter) => (latter - former));
  }

  const recursion = (n, sortedParts) => {
    if (n === 0) {
      return 1;
    }
    else if (sortedParts.length === 0) {
      return 0;
    }
    else if (sortedParts.length === 1) {
      const [ largestPart ] = sortedParts;

      return (n % largestPart === 0 ? 1 : 0);
    }
    else {
      let result = 0;
      const [ largestPart ] = sortedParts;
      const maxAvailableCount = Math.floor(n / largestPart);

      for (let usedCount = maxAvailableCount; usedCount >= 0; usedCount -= 1) {
        const remainder = n - largestPart * usedCount;

        result += recursion(remainder, sortedParts.slice(1));
      }

      return result;
    }
  };

  return recursion(n, parts);
};

/**
 * 문자열 s에 대해, s가 회문인지 판정한다.
 * @param {string} s
 */
const isPalindrome = (s) => {
  if (typeof s !== 'string') {
    throw new Error('문자열이 아닙니다');
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
};

/**
 * 자연수 p, n에 대해, n번째 p각수를 구한다.
 * @param {number} p
 * @param {number} n
 */
const nthPolygonalNumber = (p, n) => {
  if (!isInteger(p) || p <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  if (!isInteger(n) || n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  if (p === 1) {
    return 1;
  }

  return Math.floor(n * ((p - 2) * n + (4 - p)) / 2);
};

/**
 * 자연수 n에 대해, n번째 3각수를 구한다.
 * @param {number} n
 */
const nthTriangleNumber = (n) => nthPolygonalNumber(3, n);

/**
 * 자연수 n에 대해, n번째 4각수를 구한다.
 * @param {number} n
 */
const nthSquareNumber = (n) => nthPolygonalNumber(4, n);

/**
 * 자연수 n에 대해, n번째 5각수를 구한다.
 * @param {number} n
 */
const nthPentagonalNumber = (n) => nthPolygonalNumber(5, n);

/**
 * 자연수 n에 대해, n번째 6각수를 구한다.
 * @param {number} n
 */
const nthHexagonalNumber = (n) => nthPolygonalNumber(6, n);

/**
 * 자연수 n에 대해, n번째 7각수를 구한다.
 * @param {number} n
 */
const nthHeptagonalNumber = (n) => nthPolygonalNumber(7, n);

/**
 * 자연수 n에 대해, n번째 8각수를 구한다.
 * @param {number} n
 */
const nthOctagonalNumber = (n) => nthPolygonalNumber(8, n);

module.exports = {
  naturalSum,
  primeFactorization,
  positiveDivisors,
  squareSum,
  factorial,
  nthLexicographicPermutation,
  numberOfPartitions,
  isPalindrome,
  nthPolygonalNumber,
  nthTriangleNumber,
  nthSquareNumber,
  nthPentagonalNumber,
  nthHexagonalNumber,
  nthHeptagonalNumber,
  nthOctagonalNumber,
};
