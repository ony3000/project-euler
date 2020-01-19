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

if __name__ == '__main__':
    result = None
    max_prime_count = 0
    for a in range(-999, 1000):
        for b in range(-1000, 1001):
            n = 0
            while is_prime(n**2 + a*n + b):
                n += 1
            if max_prime_count < n:
                max_prime_count = n
                result = a * b
    print(result)
