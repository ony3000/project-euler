import os
import sys
from math import floor, sqrt

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import is_prime_naive


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        num = 9
        while answer is None:
            if not is_prime_naive(num):
                is_writable_as_sum = False
                base_limit = floor(sqrt((num-3) / 2))
                for square_base in range(1, base_limit+1):
                    if is_prime_naive(num - 2 * square_base**2):
                        is_writable_as_sum = True
                        break
                if not is_writable_as_sum:
                    answer = num
            num += 2
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
