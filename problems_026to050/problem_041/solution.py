import os
import sys
from math import factorial

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import is_prime_naive, nth_lexicographic_permutation


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0
        for pandigital_length in [4, 5, 7, 8]:
            digits = [str(num) for num in range(1, pandigital_length+1)]
            for order in range(1, factorial(pandigital_length)+1):
                permutation = int(nth_lexicographic_permutation(order, digits))
                if is_prime_naive(permutation) and answer < permutation:
                    answer = permutation
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
