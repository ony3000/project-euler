import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import smaller_primes

if __name__ == '__main__':
    result = sum(smaller_primes(2000000))
    print(result)
