import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 1

        num = 1
        next_n = 1
        digit_length = 0

        while digit_length < 1000000:
            digit_length += len(str(num))

            if digit_length >= next_n:
                diff = digit_length - next_n
                nth_digit = int(str(num)[-(1 + diff)])
                answer *= nth_digit
                next_n *= 10

            num += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
