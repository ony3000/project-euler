from functools import reduce
from math import factorial, floor, sqrt


def natural_sum(n):
    """자연수 n에 대해, 1부터 n까지의 합을 구한다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    return n * (n+1) // 2


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


def positive_divisors(n):
    """0이 아닌 정수 n에 대해, 정수 범위 안에서 양의 약수를 구한다."""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if n == 0:
        raise ValueError('0이 아니어야 합니다')
    if abs(n) == 1:
        return [1]
    prime_factors = prime_factorization(n)
    involutions = []
    while len(prime_factors) > 0:
        base = prime_factors[0]
        count = prime_factors.count(base)
        involutions.append([base ** exponent for exponent in range(count + 1)])
        prime_factors = prime_factors[count:]
    ordered_divisors = reduce(lambda a, b: [x*y for x in a for y in b], involutions, [1])
    ordered_divisors.sort()
    return ordered_divisors


def square_sum(n):
    """자연수 n에 대해, 1부터 n까지 제곱의 합을 구한다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    return n * (n+1) * (2*n+1) // 6


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


def nth_lexicographic_permutation(n, elements=None):
    """자연수 n에 대해, n번째 사전식 순열을 구한다.

    기본적으로는 'a'부터 'z'까지의 문자들을 재배열하지만, 임의의 문자 리스트를 지정할 수도 있다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    if elements is None:
        elements = [chr(ord('a')+x) for x in range(26)]
    elif type(elements) != list:
        raise TypeError('리스트가 아닙니다')
    else:
        if any(type(element) != str for element in elements):
            raise ValueError('문자로만 재배열 가능합니다')
        elements.sort()
    max_order = factorial(len(elements))
    if n > max_order:
        raise IndexError(f'최대 {max_order}가지 순열이 존재합니다')
    if len(elements) == 0:
        return None
    result = ''
    index = n - 1
    for num in range(len(elements)-1, 0, -1):
        permutation_count = factorial(num)
        quotient = index // permutation_count
        result += elements[quotient]
        elements = elements[:quotient] + elements[quotient+1:]
        index %= permutation_count
    result += elements[0]
    return result


def is_prime(n):
    """정수 n에 대해, 소수 판정을 한다.

    출처: https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test#Miller_test"""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    temp = n - 1
    r = 0
    while temp % 2 == 0:
        temp //= 2
        r += 1
    d = temp
    if n < 2047:
        test_bases = [2]
    elif n < 1373653:
        test_bases = [2, 3]
    else:
        raise ValueError('소수 판정 테스트 집합을 확장해야 합니다.')
    for a in test_bases:
        x = a ** d % n
        if x == 1 or x == n-1:
            continue
        composite_witness = True
        for _ in range(r-1):
            x = x ** 2 % n
            if x == n-1:
                composite_witness = False
                break
        if composite_witness:
            return False
    return True


def number_of_partitions(n, parts=None):
    """음이 아닌 정수 n에 대해, n을 분할하는 방법의 수를 구한다.

    기본적으로는 1부터 n까지의 자연수들로 분할하지만, 임의의 자연수 리스트를 지정할 수도 있다."""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if n < 0:
        raise ValueError('음의 정수가 아니어야 합니다')
    if parts is None:
        parts = [x for x in range(n, 0, -1)]
    elif type(parts) != list:
        raise TypeError('리스트가 아닙니다')
    else:
        if any(type(part) != int or part <= 0 for part in parts):
            raise ValueError('자연수로만 분할 가능합니다')
        parts.sort(reverse=True)
    def recursive_closure(n, sorted_parts):
        if n == 0:
            return 1
        elif len(sorted_parts) == 0:
            return 0
        elif len(sorted_parts) == 1:
            largest_part = sorted_parts[0]
            return (1 if n % largest_part == 0 else 0)
        else:
            result = 0
            largest_part = sorted_parts[0]
            max_available_count = n // largest_part
            for used_count in range(max_available_count, -1, -1):
                remainder = n - largest_part * used_count
                result += recursive_closure(remainder, sorted_parts[1:])
            return result
    return recursive_closure(n, parts)


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


def is_palindrome(n):
    """자연수 n에 대해, n이 회문수인지 판정한다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    digits = [digit for digit in str(n)]
    digits.reverse()
    reversed_n = int(''.join(digits))
    return n == reversed_n
