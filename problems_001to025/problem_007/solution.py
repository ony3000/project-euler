from math import floor, sqrt


def first_primes(n):
    """자연수 n에 대해, 처음 n개의 소수를 구한다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    primes = [2]
    dividend = 3
    while len(primes) < n:
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
    result = first_primes(10001)[-1]
    print(result)
