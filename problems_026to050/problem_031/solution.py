import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import number_of_partitions


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = number_of_partitions(200, [1, 2, 5, 10, 20, 50, 100, 200])

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
