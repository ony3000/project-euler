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
        max_triangle_count = 0
        for p in range(12, 1001, 2):
            triangle_count = 0
            max_a = ceil(p / 3) - 1
            for a in range(max_a, 0, -1):
                for b in range(a+1, ceil((p-a) / 2)):
                    c = p - (a + b)
                    if a**2 + b**2 == c**2:
                        triangle_count += 1
            if max_triangle_count < triangle_count:
                max_triangle_count = triangle_count
                answer = p
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
