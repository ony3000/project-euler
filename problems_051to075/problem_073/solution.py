import os
import sys
from math import ceil, floor, gcd

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        for denominator in range(2, 12000+1):
            max_numerator = floor(denominator * 1 / 2)

            if max_numerator == denominator * 1 / 2:
                max_numerator -= 1

            min_numerator = ceil(denominator * 1 / 3)

            if min_numerator == denominator * 1 / 3:
                min_numerator += 1

            for numerator in range(min_numerator, max_numerator+1):
                if gcd(numerator, denominator) == 1:
                    answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
