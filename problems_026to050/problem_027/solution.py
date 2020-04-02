import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import is_prime

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
