import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import natural_sum


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 3*natural_sum(999//3) + 5*natural_sum(999//5) - 15*natural_sum(999//15)
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
