import os
import sys
from functools import reduce
from math import gcd

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = reduce(lambda a, b: a*b//gcd(a, b), range(1, 21), 1)
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
