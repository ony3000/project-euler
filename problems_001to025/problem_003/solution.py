import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import prime_factorization

if __name__ == '__main__':
    result = prime_factorization(600851475143)[-1]
    print(result)
