import os
import sys
from math import ceil

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        for a in range(332, 0, -1):
            for b in range(a+1, ceil((1000-a) / 2)):
                c = 1000 - (a + b)

                if a**2 + b**2 == c**2:
                    answer = a * b * c
                    break

            if answer is not None:
                break

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
