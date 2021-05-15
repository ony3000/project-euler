import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import nth_lexicographic_permutation


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = nth_lexicographic_permutation(1000000, list('0123456789'))

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
