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
        spiral_size = 1001
        contour_count = (spiral_size + 1) // 2
        for index in range(contour_count):
            if index == 0:
                answer += 1
            else:
                contour_size = 2*index + 1
                max_inner_number = (contour_size-2) ** 2
                answer += max_inner_number*4 + (contour_size-1)*10
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
