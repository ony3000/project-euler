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
        for num in range(1, 1000000):
            if is_palindrome(str(num)):
                binary = format(num, 'b')
                if is_palindrome(binary):
                    answer += num
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
