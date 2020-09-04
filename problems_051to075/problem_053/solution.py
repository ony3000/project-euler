import os
import sys
from math import factorial

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        for n in range(1, 101):
            half = n // 2

            for r in range(0, half+1):
                binomial_coefficient = factorial(n) / (factorial(r) * factorial(n-r))

                if binomial_coefficient > 1000000:
                    if r < n/2:
                        answer += 2
                    else:
                        answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
