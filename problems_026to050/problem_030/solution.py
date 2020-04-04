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
        for num in range(10, 354295):
            sum_of_powers = sum(int(digit)**5 for digit in str(num))
            if sum_of_powers == num:
                answer += num
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
