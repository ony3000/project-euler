from functools import reduce
from math import floor, sqrt


def smaller_primes(n):
    """정수 n에 대해, n보다 작은 소수를 구한다."""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if n <= 2:
        return []
    primes = [2]
    dividend = 3
    while primes[-1] < n and dividend < n:
        max_divisor = floor(sqrt(dividend))
        is_divisible = False
        for divisor in primes:
            if divisor > max_divisor:
                break
            if dividend % divisor == 0:
                is_divisible = True
                break
        if not is_divisible:
            primes.append(dividend)
        dividend += 2
    return primes

if __name__ == '__main__':
    result = reduce(lambda a, b: a+b, smaller_primes(2000000), 0)
    print(result)
