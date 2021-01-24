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
        answer = 0

        num = 0
        while True:
            num += 1

            min_base = ceil(10 ** ((num-1) / num))
            max_base = 10

            base_count = max_base - min_base

            if base_count == 0:
                break

            answer += base_count

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
