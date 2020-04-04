import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import natural_sum, square_sum


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = natural_sum(100)**2 - square_sum(100)
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
