import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from problems_001to025.problem_003.solution import prime_factorization

def is_prime_naive(n):
    """정수 n에 대해, 소수 판정을 한다."""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    return prime_factorization(n)[-1] == n

if __name__ == '__main__':
    result = None
    truncatable_primes = []
    num = 11
    while len(truncatable_primes) < 11:
        if '0' not in str(num) and '5' not in str(num)[1:]:
            if is_prime_naive(num):
                is_truncatable_prime = True
                temp = str(num)
                for index in range(1, len(temp)):
                    left_truncated = int(temp[index:])
                    right_truncated = int(temp[:index])
                    if not is_prime_naive(left_truncated) or not is_prime_naive(right_truncated):
                        is_truncatable_prime = False
                        break
                if is_truncatable_prime:
                    truncatable_primes.append(num)
        num += 2
    result = sum(truncatable_primes)
    print(result)
