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

        for a in range(1, 100):
            for b in range(1, 100):
                num = a ** b
                sum_of_digits = sum(int(digit) for digit in str(num))

                if answer < sum_of_digits:
                    answer = sum_of_digits

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
