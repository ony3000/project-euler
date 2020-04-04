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
        answer = sum(int(digit) for digit in str(factorial(100)))
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
