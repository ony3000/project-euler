import os
import sys
from math import gcd

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        max_ratio = 0

        for denominator in range(2, 1000000+1):
            max_numerator = denominator * 3 // 7

            if max_numerator == denominator * 3 / 7:
                max_numerator -= 1

            for numerator in range(max_numerator, 0, -1):
                if gcd(numerator, denominator) == 1:
                    ratio = numerator / denominator

                    if max_ratio < ratio:
                        max_ratio = ratio
                        answer = numerator

                    break

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
