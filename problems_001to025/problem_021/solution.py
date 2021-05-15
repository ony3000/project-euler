import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import positive_divisors


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        amicable_numbers = []
        divisor_sum_per_number = {
            0: 0,
        }

        for num in range(1, 10000):
            proper_divisors = positive_divisors(num)[:-1]
            divisor_sum = sum(proper_divisors)
            divisor_sum_per_number[num] = divisor_sum

            if divisor_sum < num and divisor_sum_per_number[divisor_sum] == num:
                amicable_numbers += [num, divisor_sum]

        answer = sum(amicable_numbers)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
