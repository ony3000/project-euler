import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import is_palindrome


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        iteration_limit = 49

        for starter in range(1, 10000):
            num = starter
            iteration_count = 0

            while iteration_count < iteration_limit:
                digits = [digit for digit in str(num)]
                digits.reverse()
                reversed_num = int(''.join(digits))
                num += reversed_num

                if is_palindrome(str(num)):
                    break

                iteration_count += 1

            if iteration_count == iteration_limit:
                answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
