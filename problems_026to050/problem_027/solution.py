import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import is_prime


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        max_prime_count = 0
        for a in range(-999, 1000):
            for b in range(-1000, 1001):
                n = 0
                while is_prime(n**2 + a*n + b):
                    n += 1
                if max_prime_count < n:
                    max_prime_count = n
                    answer = a * b
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
