import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import natural_sum, positive_divisors


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        abundant_numbers = []
        two_abundant_sums = set()
        for num in range(1, 28124):
            proper_divisors = positive_divisors(num)[:-1]
            divisor_sum = sum(proper_divisors)
            if divisor_sum > num:
                abundant_numbers += [num]
                for abundant in abundant_numbers:
                    abundant_sum = abundant + num
                    if abundant_sum > 28123:
                        break
                    else:
                        two_abundant_sums.add(abundant_sum)
        answer = natural_sum(28123) - sum(two_abundant_sums)
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
