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
        answer = factorial(40) // (factorial(20) * factorial(20))

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
