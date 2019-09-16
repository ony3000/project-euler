from math import floor, sqrt

def prime_factorization(n):
    """절대값이 1보다 큰 정수 n에 대해, 정수 범위 안에서 소인수분해를 한다."""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if abs(n) <= 1:
        raise ValueError('절대값이 1보다 커야 합니다')
    prime_factors = []
    dividend = n if n > 0 else -n
    while dividend > 1:
        max_divisor = floor(sqrt(dividend))
        is_divisible = False
        for divisor in [2, *range(3, max_divisor+1, 2)]:
            if dividend % divisor == 0:
                is_divisible = True
                while dividend % divisor == 0:
                    prime_factors.append(divisor)
                    dividend //= divisor
                break
        if not is_divisible:
            prime_factors.append(dividend)
            break
    return prime_factors

if __name__ == '__main__':
    result = prime_factorization(600851475143)[-1]
    print(result)
