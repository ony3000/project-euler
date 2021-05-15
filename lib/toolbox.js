/**
 * 자연수 n에 대해, 1부터 n까지의 합을 구한다.
 * @param {number} n
 */
const naturalSum = (n) => {
  if (Math.floor(n) !== Math.ceil(n)) {
    throw new Error('자연수가 아닙니다');
  }

  if (n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  return n * (n + 1) / 2;
};

/**
 * 절대값이 1보다 큰 정수 n에 대해, 정수 범위 안에서 소인수분해를 한다.
 * @param {number} n
 */
const primeFactorization = (n) => {
  if (Math.floor(n) !== Math.ceil(n)) {
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
  if (Math.floor(n) !== Math.ceil(n)) {
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
    const count = primeFactors.filter((prime) => (prime === base)).length;

    involutions.push(Array(count + 1).fill(null).map((_, exponent) => (base ** exponent)));
    primeFactors.splice(0, count);
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
  if (Math.floor(n) !== Math.ceil(n)) {
    throw new Error('자연수가 아닙니다');
  }

  if (n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  return n * (n + 1) * (2 * n + 1) / 6;
};

/**
 * 음이 아닌 정수 n에 대해, n의 계승을 구한다.
 * @param {number} n
 */
const factorial = (n) => {
  if (Math.floor(n) !== Math.ceil(n)) {
    throw new Error('0 또는 양의 정수여야 합니다');
  }

  if (n < 0) {
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
  if (Math.floor(n) !== Math.ceil(n)) {
    throw new Error('자연수가 아닙니다');
  }

  if (n <= 0) {
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

    elements.sort();
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

module.exports = {
  naturalSum,
  primeFactorization,
  positiveDivisors,
  squareSum,
  factorial,
  nthLexicographicPermutation,
};
