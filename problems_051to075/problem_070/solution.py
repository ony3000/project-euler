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
        min_ratio = None

        for num in range(2, 10**7 + 1):
            factors_with_count = Counter(prime_factorization(num)).items()
            phi_value = 1

            for (prime, exponent) in factors_with_count:
                phi_value *= (prime ** (exponent - 1) * (prime - 1))

            if Counter(str(num)) != Counter(str(phi_value)):
                continue

            if min_ratio is None or min_ratio > num / phi_value:
                min_ratio = num / phi_value
                answer = num

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
