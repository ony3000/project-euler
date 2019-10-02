from collections import namedtuple
from functools import reduce

from ..problem_003.solution import prime_factorization


def positive_divisors(n):
    """0이 아닌 정수 n에 대해, 정수 범위 안에서 양의 약수를 구한다."""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if n == 0:
        raise ValueError('0이 아니어야 합니다')
    if abs(n) == 1:
        return [1]
    prime_factors = prime_factorization(n)
    unique_divisors = set()
    Power = namedtuple('Power', ['base', 'exponent'])
    for case in range(2 ** len(prime_factors)):
        exponents = [int(digit) for digit in format(case, f'0{len(prime_factors)}b')]
        pairs = [Power(*pair) for pair in zip(prime_factors, exponents)]
        powered = [pair.base ** pair.exponent for pair in pairs]
        divisor = reduce(lambda a, b: a*b, powered)
        unique_divisors.add(divisor)
    ordered_divisors = list(unique_divisors)
    ordered_divisors.sort()
    return ordered_divisors

if __name__ == '__main__':
    result = None
    for num in range(997, 99, -1):
        digits = [digit for digit in str(num)]
        digits.reverse()
        reversed_num = int(''.join(digits))
        palindrome = num*1000 + reversed_num
        divisors = positive_divisors(palindrome)
        valid_divisors = [divisor for divisor in divisors if divisor < 1000 and divisor >= 100]
        quotients = [palindrome // divisor for divisor in valid_divisors]
        valid_quotients = [quotient for quotient in quotients if quotient < 1000 and quotient >= 100]
        if len(valid_quotients) > 0:
            result = palindrome
            break
    print(result)