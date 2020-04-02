import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import first_primes

if __name__ == '__main__':
    result = first_primes(10001)[-1]
    print(result)
