import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        a, b = 1, 2

        while b <= 4000000:
            answer += b
            a, b = (a + 2*b), (2*a + 3*b)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
