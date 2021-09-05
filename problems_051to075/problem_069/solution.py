import os
import sys
from collections import Counter

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import prime_factorization


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        max_ratio = 0

        for num in range(2, 1000001):
            factors_with_count = Counter(prime_factorization(num)).items()
            phi_value = 1

            for (prime, exponent) in factors_with_count:
                phi_value *= (prime ** (exponent - 1) * (prime - 1))

            if max_ratio < num / phi_value:
                max_ratio = num / phi_value
                answer = num

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
