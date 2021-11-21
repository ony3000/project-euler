/**
 * 자연수 n에 대해, 1부터 n까지의 합을 구한다.
 */
const naturalSum = (n: number) => {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  return (n * (n + 1)) / 2;
};

/**
 * 절대값이 1보다 큰 정수 n에 대해, 정수 범위 안에서 소인수분해를 한다.
 */
const primeFactorization = (n: number) => {
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
};

/**
 * 0이 아닌 정수 n에 대해, 정수 범위 안에서 양의 약수를 구한다.
 */
const positiveDivisors = (n: number) => {
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
  const involutions = [];

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
};

/**
 * 두 정수 a, b에 대해, 정수 범위 안에서 최대공약수를 구한다.
 */
const gcd = (a: number, b: number) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('정수가 아닙니다');
  }

  let larger = Math.max(Math.abs(a), Math.abs(b));
  let smaller = Math.min(Math.abs(a), Math.abs(b));

  while (smaller > 0) {
    [larger, smaller] = [smaller, larger % smaller];
  }

  return larger;
};

/**
 * 자연수 n에 대해, 1부터 n까지 제곱의 합을 구한다.
 */
const squareSum = (n: number) => {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  return (n * (n + 1) * (2 * n + 1)) / 6;
};

/**
 * 주어진 실수 배열에 대해, 모든 값을 곱한 결과를 구한다.
 */
const prod = (numbers: number[]) => numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

export {
  naturalSum,
  primeFactorization,
  positiveDivisors,
  gcd,
  squareSum,
  prod,
};
