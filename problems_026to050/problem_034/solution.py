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
        answer = 0

        for num in range(10, 2540161):
            sum_of_factorials = sum(factorial(int(digit)) for digit in str(num))

            if sum_of_factorials == num:
                answer += num

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
