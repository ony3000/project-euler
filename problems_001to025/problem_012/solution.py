import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import natural_sum, positive_divisors


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        num = 1
        while answer is None:
            triangle_number = natural_sum(num)
            divisors = positive_divisors(triangle_number)
            num += 1
            if len(divisors) > 500:
                answer = triangle_number
                break
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
