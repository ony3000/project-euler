/**
 * 자연수 n에 대해, 1부터 n까지의 합을 구한다.
 */
const naturalSum = (n: number) => {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('자연수가 아닙니다');
  }

  return (n * (n + 1)) / 2;
};

export {
  naturalSum,
};
